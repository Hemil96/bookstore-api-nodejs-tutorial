import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { BookDetails } from '../details';
import { SellBook } from '../views';
import RouterSwitch from './RouterSwitch';
import BookList from './BookList';
import api from '../../api';

const Content = styled.main`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 30px;
  width: 100%;
  height: 540px;
`;

export default function BooksContainer() {
  const books = useBooksAPI();
  const handleSave = books.save;

  const renderSellRoute = () => <SellBook handleSave={handleSave} />;

  const renderDetailsRoute = ({ match }) => {
    const selectedBook = books.data.find(book => book._id === match.params.id);
    return <BookDetails {...selectedBook} handleDelete={books.delete} />;
  };

  return (
    <Content>
      <RouterSwitch
        renderSell={renderSellRoute}
        renderDetails={renderDetailsRoute}
      />
      <BookList books={books.data} />
    </Content>
  );
}

function useBooksAPI() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api
      .fetchBooks()
      .then(setBooks)
      .catch(e => console.error(e));
  }, []);

  return {
    data: books,
    fetch: () => api.fetchBooks().then(setBooks),
    save: newBook =>
      api.saveBook(newBook).then(savedBook => {
        setBooks([...books, savedBook]);
      }),
    update: (id, updated) =>
      api
        .updateBook(id, updated)
        .then(api.fetchBooks)
        .then(setBooks),
    delete: id =>
      api
        .deleteBook(id)
        .then(api.fetchBooks)
        .then(setBooks),
  };
}
