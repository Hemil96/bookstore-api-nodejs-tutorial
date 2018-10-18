import React, { Component } from 'react';
import styled from 'styled-components';

import { GlobalStyle } from './theme';
import Navbar from './components/Navbar';
import RouterSwitch from './routes/RouterSwitch';

const Container = styled.div`
  margin: 0 auto;
  width: 1024px;
`;

const Content = styled.main`
  width: 100%;
  height: 540px;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Navbar />
        <Content>
          <RouterSwitch />
        </Content>
      </Container>
    );
  }
}

export default App;
