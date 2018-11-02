import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { Quiz } from '../';

const questions = [
  { question: 'Is this the first?' },
  { question: 'Is this the second?' },
  { question: 'Is this the third?' },
  { question: 'Is this the fourth?' },
];

const answers = ['nope', 'nah', 'meh', 'ok', 'yarp'];

const props = {
  questions,
  answers,
  review: 'Review page mock',
  addScore: () => {},
};

describe('<Quiz />', () => {
  test('should render the first question', () => {
    const { container } = render(<Quiz {...props} />);
    expect(container.querySelector('.isVisible')).toContainHTML(
      'Is this the first?'
    );
  });

  test('should advance each slide until the review slide', () => {
    const { getByText, container } = render(<Quiz {...props} />);

    fireEvent.click(getByText('nope'));
    expect(container.querySelector('.isVisible')).toContainHTML(
      'Is this the second?'
    );

    fireEvent.click(getByText('meh'));

    expect(container.querySelector('.isVisible')).toContainHTML(
      'Is this the third?'
    );

    fireEvent.click(getByText('yarp'));
    expect(container.querySelector('.isVisible')).toContainHTML(
      'Is this the fourth?'
    );

    fireEvent.click(getByText('ok'));

    expect(container.querySelector('.isVisible')).toBeNull();
    expect(getByText('Review page mock')).toBeInTheDocument();
  });

  test('should not show back option if first slide', () => {
    const { queryByText } = render(<Quiz {...props} />);
    expect(queryByText('back')).toBeNull();
  });

  test('should go back 1 slide until first slide', () => {
    const { getByText, container } = render(<Quiz {...props} />);

    fireEvent.click(getByText('ok'));
    fireEvent.click(getByText('ok'));
    fireEvent.click(getByText('ok'));

    fireEvent.click(getByText('back'));
    fireEvent.click(getByText('back'));
    fireEvent.click(getByText('back'));

    expect(container.querySelector('.isVisible')).toContainHTML(
      'Is this the first?'
    );
  });
});
