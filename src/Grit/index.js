import React from 'react';
import { questions as questionsData, answers as answersData } from './data';
import { Quiz } from '../Quiz';
import { Emoji } from '../Emoji';
import { colors } from '../styles';
import { Link } from '@reach/router';
export {Review} from './Review'

export const Intro = () => (
  <div>
    <h1>Intro to grit</h1>
    <Link to="0">start</Link>
  </div>
);

export const GritQuiz = props => (
  <Quiz
    {...props}
    questions={questionsData}
    answers={answersData}
    name="Grit"
    accent={colors.primary.dark}
  />
);

