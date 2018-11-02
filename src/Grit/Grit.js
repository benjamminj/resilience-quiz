import React from 'react';
import PropTypes from 'prop-types';
import { questions as questionsData, answers as answersData } from './data';
import { Quiz } from '../Quiz';
import { Emoji } from '../Emoji';

export const Grit = (props) => {
  return (
    <Quiz
      {...props}
      review={
        <h2>
          We finished grit! <Emoji icon="🎉" label="confetti" />
        </h2>
      }
    />
  );
};

Grit.propTypes = {
  questions: PropTypes.array,
  answers: PropTypes.arrayOf(PropTypes.string),
};

Grit.defaultProps = {
  questions: questionsData,
  answers: answersData,
};
