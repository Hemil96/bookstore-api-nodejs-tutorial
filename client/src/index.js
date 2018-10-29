import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from 'styled-react-modal';
import { BrowserRouter as Router } from 'react-router-dom';

import theme from './theme';
import App from './App';

// TODO unless ModalProvider is gonna be used in a bunch of places, move it
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ModalProvider>
      <Router>
        <App />
      </Router>
    </ModalProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
