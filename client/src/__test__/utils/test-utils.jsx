import React from 'react';
import { render } from 'react-testing-library';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import theme from '../../theme';

// Wrap tested components in styled-components theme and router
const customRender = (node, ...options) => {
  return render(
    <ThemeProvider theme={theme}>
      <Router>{node}</Router>
    </ThemeProvider>,
    ...options
  );
};

// re-export everything
export * from 'react-testing-library';

// override render method
export { customRender as render };
