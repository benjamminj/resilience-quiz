import React from 'react';
import { questions as questionsData, answers as answersData } from './data';
import { Quiz } from '../Quiz';
import { colors } from '../styles';
import { Link } from '@reach/router';
export { Intro } from './Intro';

export const OptimismQuiz = props => (
  <Quiz
    {...props}
    questions={questionsData}
    answers={answersData}
    name="Optimism"
    background={colors.secondary.light}
    accent={colors.secondary.main}
  />
);
