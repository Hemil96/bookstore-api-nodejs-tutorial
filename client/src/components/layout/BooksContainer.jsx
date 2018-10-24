import React from 'react';
import styled from 'styled-components';

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

class BooksContainer extends React.Component {
  state = {
    books: [],
    selectedBook: {},
  };

  handleSave(newBook) {
    return api.saveBook(newBook).then(savedBook => {
      const books = [savedBook, ...this.state.books];
      this.setState({ books });
    });
  }

  // TODO just change the book in books array instead of calling db again
  handleUpdate(id, updatedBook) {
    return api
      .updateBook(id, updatedBook)
      .then(api.fetchBooks)
      .then(books => this.setState({ books }));
  }

  // TODO just change the book in books array instead of calling db again
  handleDelete(id) {
    return api
      .deleteBook(id)
      .then(api.fetchBooks)
      .then(books => this.setState({ books }));
  }

  componentDidMount() {
    if (this.state.books.length === 0) {
      api.fetchBooks().then(books => this.setState({ books }));
    }
  }

  render() {
    return (
      <Content>
        <RouterSwitch
          selectedBook={this.state.selectedBook}
          handleSave={this.handleSave.bind(this)}
        />
        <BookList books={this.state.books} />
      </Content>
    );
  }
}

export default BooksContainer;
