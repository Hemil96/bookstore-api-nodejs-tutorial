import React from 'react';
import styled from 'styled-components';

import { GlobalStyle } from './theme';
import { Navbar, BooksContainer } from './components/layout';

const Container = styled.div`
  margin: 0 auto;
  width: 1024px;
`;

const App = () => (
  <Container>
    <GlobalStyle />
    <Navbar />
    <BooksContainer />
  </Container>
);

export default App;
