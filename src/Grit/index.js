import React from 'react';
import { questions as questionsData, answers as answersData } from './data';
import { Quiz } from '../Quiz';
import { colors } from '../styles';

export const GritQuiz = props => (
  <Quiz
    {...props}
    questions={questionsData}
    answers={answersData}
    name="Grit"
    accent={colors.primary.dark}
  />
);

