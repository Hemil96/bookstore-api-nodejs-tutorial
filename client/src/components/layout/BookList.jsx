import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const BookListing = styled.aside`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.default.bg};
  max-width: 327px;
  max-height: 520px;
  padding-top: 20px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Header = styled.h2`
  display: flex;
  justify-content: space-between;
  margin: 0;
  margin-bottom: 10px;
  padding: 0 23px;
  font-size: 18px;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  padding: 12px 30px;
  font-size: 15px;

  &:hover {
    background-color: #dedede;
    cursor: pointer;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleAndPrice = styled(Flex)`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const AuthorAndFormat = styled(Flex)`
  font-weight: ${({ theme }) => theme.fontWeights.light};
`;

const BookList = props => (
  <BookListing>
    <Header>Browse</Header>
    <List>
      {props.books.map(book => (
        <NavLink
          to={`/details/${book._id}`}
          key={book._id}
          activeClassName="selected"
        >
          <Item>
            <TitleAndPrice>
              <span>{book.title}</span>
              <span>${book.price}</span>
            </TitleAndPrice>
            <AuthorAndFormat>
              <span>{book.author}</span>
              <span>{book.format}</span>
            </AuthorAndFormat>
          </Item>
        </NavLink>
      ))}
    </List>
  </BookListing>
);

export default BookList;