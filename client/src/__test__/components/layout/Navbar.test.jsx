import React from 'react';

import { render } from '../../utils';
import Navbar from '../../../components/layout/Navbar';

describe('Navbar', () => {
  test('renders the navbar items', () => {
    const { getByText, getByLabelText } = render(<Navbar />);
    expect(getByText('Darnes and Global'));
    expect(getByText('Buy'));
    expect(getByText('Sell'));
    expect(getByLabelText('Search books'));
  });
});
