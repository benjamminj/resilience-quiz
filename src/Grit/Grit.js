import React from 'react';
import PropTypes from 'prop-types';
import { questions as questionsData, answers as answersData } from './data';
import { Quiz } from '../Quiz';
import { Emoji } from '../Emoji';
import { colors } from '../styles';
import { Router, Link } from '@reach/router';

const Index = () => (
  <div>
    <h1>Intro to grit</h1>
    <Link to="0">start</Link>
  </div>
);

const Review = ({ linkTo }) => (
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

export const Grit = props => {
  return (
    <Router>
      <Index default />
      <Quiz
        {...props}
        path="/:currentId"
        name="Grit"
        accent={colors.primary.dark}
      />
      <Review linkTo={props.linkTo} path="review" />
    </Router>
  );
};

Grit.propTypes = {
  linkTo: PropTypes.string.isRequired,
  questions: PropTypes.array,
  answers: PropTypes.arrayOf(PropTypes.string),
};

Grit.defaultProps = {
  questions: questionsData,
  answers: answersData,
};
