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
  name: 'test',
  review: 'Review page mock',
  addScore: () => {},
};

describe('<Quiz />', () => {
  test('should render the first question', () => {
    const { getByTestId } = render(<Quiz {...props} />);
    expect(getByTestId('visible')).toContainHTML(
      'Is this the first?'
    );
  });

  test('should advance each slide until the review slide', () => {
    const { getByText, getByTestId, queryByTestId } = render(<Quiz {...props} />);

    fireEvent.click(getByText('nope'));
    expect(getByTestId('visible')).toContainHTML(
      'Is this the second?'
    );

    fireEvent.click(getByText('meh'));

    expect(getByTestId('visible')).toContainHTML(
      'Is this the third?'
    );

    fireEvent.click(getByText('yarp'));
    
    expect(getByTestId('visible')).toContainHTML(
      'Is this the fourth?'
    );

    fireEvent.click(getByText('ok'));

    expect(queryByTestId('visible')).toBeNull();
    expect(getByText('Review page mock')).toBeInTheDocument();
  });

  test('should not show back option if first slide', () => {
    const { queryByText } = render(<Quiz {...props} />);
    expect(queryByText('Back')).toBeNull();
  });

  test('should go back 1 slide until first slide', () => {
    const { getByText, getByTestId } = render(<Quiz {...props} />);

    fireEvent.click(getByText('ok'));
    fireEvent.click(getByText('ok'));
    fireEvent.click(getByText('ok'));

    fireEvent.click(getByText('Back'));
    fireEvent.click(getByText('Back'));
    fireEvent.click(getByText('Back'));

    expect(getByTestId('visible')).toContainHTML(
      'Is this the first?'
    );
  });
});
