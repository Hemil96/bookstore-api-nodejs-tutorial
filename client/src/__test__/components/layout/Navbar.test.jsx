import React from 'react';
import { render } from '../../utils';
import Navbar from '../../../components/layout/Navbar';

describe('Navbar', () => {
  test('should render the navbar items', () => {
    const { getByText, getByLabelText } = render(<Navbar />);
    getByText('Darnes and Global');
    getByText('Buy');
    getByText('Sell');
    getByLabelText('Search books');
  });
});
