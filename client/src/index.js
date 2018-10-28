import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from 'styled-react-modal';
import { BrowserRouter as Router } from 'react-router-dom';

import theme from './theme';
import App from './App';

// Need to put ThemeProvider here because it can only have a single child
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
