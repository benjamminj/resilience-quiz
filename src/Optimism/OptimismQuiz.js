import React from 'react';
import { Quiz } from '../Quiz';
import { colors } from '../styles';

export const OptimismQuiz = props => (
  <Quiz
    {...props}
    name="Optimism"
    background={colors.secondary.light}
    accent={colors.secondary.main} // TODO -- play with contrast colors
  />
);
