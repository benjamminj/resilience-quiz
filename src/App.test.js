import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import App from './App';

describe('<App />', () => {
  test('renders home page by default', () => {
    const { getByText } = render(<App />)
    expect(getByText('PAGE: HOME')).toBeInTheDocument();
  });

  test('routes to the grit page', () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText('GO TO GRIT'))
    expect(getByText('Grit')).toBeInTheDocument();
  })

  test('routes to the optimism page', () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText('GO TO OPTIMISM'))
    expect(getByText('Optimism')).toBeInTheDocument();
  })

  test('routes to the results page', () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText('GO TO RESULTS'))
    expect(getByText('Results')).toBeInTheDocument();
  })
});
