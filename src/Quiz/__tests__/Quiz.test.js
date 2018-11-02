import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { Quiz } from '../';

const questions = [
  { question: 'Is this the first?' },
  { question: 'Is this the second?' },
  { question: 'Is this the third?' },
  { question: 'Is this the fourth?' },
];

const props = {
  questions,
  review: 'Review page mock'
}
describe('<Quiz />', () => {
  test('should render the first question', () => {
    const { getByText } = render(<Quiz {...props} />)
    expect(getByText('Is this the first?')).toBeInTheDocument()
  });

  test('should advance each slide until the review slide', () => {
    const { getByText } = render(<Quiz {...props} />);
    
    fireEvent.click(getByText('next'))
    expect(getByText('Is this the second?')).toBeInTheDocument();

    fireEvent.click(getByText('next'))
    expect(getByText('Is this the third?')).toBeInTheDocument();

    fireEvent.click(getByText('next'))
    expect(getByText('Is this the fourth?')).toBeInTheDocument();

    fireEvent.click(getByText('next'))
    expect(getByText('Review page mock')).toBeInTheDocument();
  });

  test('should not show back option if first slide', () => {
    const { queryByText } = render(<Quiz {...props} />);
    expect(queryByText('back')).toBeNull();
  })

  test('should go back 1 slide until first slide', () => {
    const { getByText } = render(<Quiz {...props} />);
    
    fireEvent.click(getByText('next'))
    fireEvent.click(getByText('next'))
    fireEvent.click(getByText('next'))

    fireEvent.click(getByText('back'))
    fireEvent.click(getByText('back'))
    fireEvent.click(getByText('back'))
    
    expect(getByText('Is this the first?')).toBeInTheDocument();
  })
});