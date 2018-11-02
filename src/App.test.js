import React from 'react';
import { render } from 'react-testing-library';
import App from './App';

test('renders text', () => {
  const { getByText } = render(<App />);
  expect(getByText('Learn React')).toBeInTheDocument()
});
