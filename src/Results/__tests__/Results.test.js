import React from 'react';
import {Results} from '../'
import { render } from 'react-testing-library';

jest.mock('react-pose');

const props = {
  gritScore: 60,
  optimismScore: 20,
  totalScore: 80,
};

describe('<Results />', () => {
  test('should render grit score', () => {
    const { getByText } = render(<Results {...props} />);
    
    expect(getByText('60%')).toBeInTheDocument();
  });
});