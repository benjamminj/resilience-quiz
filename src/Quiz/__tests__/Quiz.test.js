import React from 'react';
import { render, fireEvent, queryByTestId } from 'react-testing-library';
import { Quiz } from '../';
import { DEFAULT_SCORING } from '../../constants';

const questions = [
  { question: 'Is this the first?', scoring: DEFAULT_SCORING },
  { question: 'Is this the second?', scoring: DEFAULT_SCORING },
  { question: 'Is this the third?', scoring: DEFAULT_SCORING },
  { question: 'Is this the fourth?', scoring: DEFAULT_SCORING },
];

const answers = ['nope', 'nah', 'meh', 'ok', 'yarp'];

const props = {
  questions,
  answers,
  currentId: 0,
  name: 'test',
  review: 'Review page mock',
  addScore: () => {},
};

describe('<Quiz />', () => {
  test('should render the first question', () => {
    const { getByText } = render(<Quiz {...props} />);
    expect(getByText('Is this the first?')).toBeInTheDocument();
  });

  test('should render whichever question is in route param', () => {
    const { getByText } = render(<Quiz {...props} currentId={3} />);
    expect(getByText('Is this the fourth?')).toBeInTheDocument();
  })

  test('should not show back option if first slide', () => {
    const { queryByText } = render(<Quiz {...props} />);
    expect(queryByText('Back')).toBeNull();
  });
});
