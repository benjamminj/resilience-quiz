import React from 'react';
import PropTypes from 'prop-types';
import { questions as questionsData, answers as answersData } from './data';
import { Quiz } from '../Quiz';
import { Emoji } from '../Emoji';
import { colors } from '../styles';
import { Link } from '@reach/router';
import { PosedRouter } from '../PosedRouter';
import posed from 'react-pose';

export const Index = () => (
  <div>
    <h1>Intro to grit</h1>
    <Link to="0">start</Link>
  </div>
);

export const Review = ({ linkTo }) => (
  <div>
    <h2>
      We finished grit! <Emoji icon="🎉" label="confetti" />
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

export const GritQuiz = props => (
  <Quiz
    {...props}
    questions={questionsData}
    answers={answersData}
    path="/:currentId"
    name="Grit"
    accent={colors.primary.dark}
  />
);

