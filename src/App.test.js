import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import App from './App';

describe('<App />', () => {
  test('renders home page by default', () => {
    const { getByText } = render(<App />)
    expect(getByText('Welcome to Resilience.')).toBeInTheDocument();
  });

  test('clicking CTA routes to grit quiz', () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText('Get started'))
    expect(getByText('Grit')).toBeInTheDocument();
  });
});
