import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { Question } from '../Question';
import { DEFAULT_SCORING } from '../../constants';

const props = {
  id: 'test',
  question: 'what the fox say?',
  answers: ['nope', 'meh', 'maybe', 'kinda', 'yep'],
  handleInputChange: () => {},
  isVisible: false,
  scoring: DEFAULT_SCORING
};

describe('<Question />', () => {
  test('applies visible class', () => {
    const { getByTestId } = render(<Question {...props} isVisible={true} />);
    expect(getByTestId('visible')).not.toBeNull();
  });

  test('calls callback with button value when answer is chosen', () => {
    const handleInputChangeSpy = jest.fn();
    const { getByText } = render(
      <Question {...props} handleInputChange={handleInputChangeSpy} />
    );

    fireEvent.click(getByText('meh'));

    expect(handleInputChangeSpy).toHaveBeenCalledWith(2);
  });
});
