import React from 'react';
import styled from 'styled-components';

import BookDetails from '../components/BookDetails';

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 30px;
  width: 100%;
  height: 100%;
`;

const ListingBox = styled.aside`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.default.bg};
`;

class BrowseAll extends React.Component {
  state = {
    books: [],
    selectedBook: {},
  };

  render() {
    return (
      <Container>
        <BookDetails {...this.state.selectedBook} />
        <ListingBox books={this.state.books} />
      </Container>
    );
  }
}

BrowseAll.propTypes = {};
BrowseAll.defaultProps = {};

export default BrowseAll;
