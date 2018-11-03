import React from 'react';
import { questions as questionsData, answers as answersData } from './data';
import { Quiz } from '../Quiz';
import { Emoji } from '../Emoji';
import { colors } from '../styles';
import { Link } from '@reach/router';

export const Intro = () => (
  <div>
    <h1>intro</h1>
    <Link to="0">start</Link>
  </div>
);

export const Review = ({ linkTo }) => (
  <div>
    <h2>
      We finished Optimism! <Emoji icon="😎" label="sunglasses" />
    </h2>
    <Link
      to={linkTo}
      style={{
        width: '100%',
        background: 'white',
        padding: '1rem',
        color: 'black',
      }}
    >
      Next
    </Link>
  </div>
);

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
