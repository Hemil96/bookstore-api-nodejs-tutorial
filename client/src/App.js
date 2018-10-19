import React, { Component } from 'react';
import styled from 'styled-components';

import { GlobalStyle } from './theme';
import Navbar from './components/Navbar';
import RouterSwitch from './components/RouterSwitch';

const Container = styled.div`
  margin: 0 auto;
  width: 1024px;
`;

const Content = styled.main`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 30px;
  width: 100%;
  height: 540px;
`;

const BookListing = styled.aside`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.default.bg};
`;

class App extends Component {
  state = {
    books: [],
    selectedBook: {},
  };

  render() {
    return (
      <Container>
        <GlobalStyle />
        <Navbar />
        <Content>
          <RouterSwitch {...this.state.selectedBook} />
          <BookListing books={this.state.books} />
        </Content>
      </Container>
    );
  }
}

export default App;
