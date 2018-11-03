import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { Header } from '../';

describe('<Header />', () => {
  test('should render back button if prop is passed', () => {
    const { getByText } = render(<Header back={() => {}}>header</Header>);
    expect(getByText('Back')).toBeInTheDocument();
  });

  test('should fire callback when back button is clicked', () => {
    const backSpy = jest.fn();
    const { getByText } = render(<Header back={backSpy}>header</Header>)
    
    fireEvent.click(getByText('Back'))
    expect(backSpy).toHaveBeenCalled();
  })
});
