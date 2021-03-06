import React from 'react';
import { Quiz } from '../../components/Quiz';
import { colors } from '../../styles';

export const OptimismQuiz = props => (
  <Quiz
    {...props}
    name="Optimism"
    background={colors.secondary.light}
    accent={colors.secondary.dark}
  />
);
