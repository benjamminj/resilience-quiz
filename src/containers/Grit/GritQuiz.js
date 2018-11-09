import React from 'react';
import { Quiz } from '../../components/Quiz';
import { colors } from '../../styles';

export const GritQuiz = props => (
  <Quiz
    {...props}
    name="Grit"
    accent={colors.primary.dark}
  />
);
