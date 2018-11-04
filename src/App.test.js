import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import App from './App';

describe('<App />', () => {
  test('renders home page by default', () => {
    const { getByText } = render(<App />)
    expect(getByText('Resilience.')).toBeInTheDocument();
  });
});
