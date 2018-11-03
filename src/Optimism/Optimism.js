import React from 'react';
import PropTypes from 'prop-types';
import { questions as questionsData, answers as answersData } from './data';
import { Quiz } from '../Quiz';
import { Emoji } from '../Emoji';
import { colors } from '../styles';
import { Router, Link } from '@reach/router';

const Intro = () => (
  <div>
    <h1>intro</h1>
    <Link to="0">start</Link>
  </div>
);

const Review = ({ linkTo }) => (
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

export const Optimism = props => {
  return (
    <Router>
      <Intro default />
      <Quiz
        {...props}
        path="/:currentId"
        name="Optimism"
        background={colors.secondary.light}
        accent={colors.secondary.main}
      />
      <Review linkTo={props.linkTo} path="review" />
    </Router>
  );
};

Optimism.propTypes = {
  questions: PropTypes.array,
  answers: PropTypes.arrayOf(PropTypes.string),
};

Optimism.defaultProps = {
  questions: questionsData,
  answers: answersData,
};
