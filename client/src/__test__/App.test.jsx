import React from 'react';
import { render, cleanup } from './utils';
import App from '../App';

afterEach(cleanup);

describe('App', () => {
  test('should render', () => {
    render(<App />);
  });
});
