import React from 'react';
import { render, fireEvent, queryByTestId } from 'react-testing-library';
import { Quiz } from '../';
import { navigate } from '@reach/router';
import { DEFAULT_SCORING } from '../../constants';

jest.mock('@reach/router', () => ({
  navigate: jest.fn(),
}));

const questions = [
  { id: 0, question: 'Is this the first?', scoring: DEFAULT_SCORING },
  { id: 1, question: 'Is this the second?', scoring: DEFAULT_SCORING },
  { id: 2, question: 'Is this the third?', scoring: DEFAULT_SCORING },
  { id: 3, question: 'Is this the fourth?', scoring: DEFAULT_SCORING },
];

const answers = ['nope', 'nah', 'meh', 'ok', 'yarp'];

const props = {
  questions,
  answers,
  currentId: 0,
  name: 'test',
  review: 'Review page mock',
  addScore: () => {},
  linkTo: 'next'
};

beforeEach(() => {
  navigate.mockClear();
});

describe('<Quiz />', () => {
  test('should render the first question', () => {
    const { getByText } = render(<Quiz {...props} />);
    expect(getByText('Is this the first?')).toBeInTheDocument();
  });

  test('should render whichever question is in route param', () => {
    const { getByText } = render(<Quiz {...props} currentId={3} />);
    expect(getByText('Is this the fourth?')).toBeInTheDocument();
  });

  test('should fire addScore callback & navigate to next question when an answer is clicked', () => {
    const addScoreSpy = jest.fn();
    const { getByText } = render(
      <Quiz {...props} addScore={addScoreSpy} currentId={0} />
    );

    fireEvent.click(getByText('yarp'));
  
    expect(addScoreSpy).toHaveBeenCalledWith(
      {
        id: 0,
        question: 'Is this the first?',
        scoring: 'default_scoring',
      },
      5,
      5
    );
    expect(navigate).toHaveBeenCalledWith(1)
  });

  test('should navigate to the `linkTo` route after answering last question', () => {
    const { getByText } = render(
      <Quiz {...props} currentId={3} />
    );

    fireEvent.click(getByText('yarp'));

    expect(navigate).toHaveBeenCalledWith('next')
  })
});
