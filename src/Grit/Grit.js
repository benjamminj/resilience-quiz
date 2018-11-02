import React from 'react';
import PropTypes from 'prop-types';
import questions from './questions';
import { Quiz } from '../Quiz';
import { Emoji } from '../Emoji';

export const Grit = ({ questions }) => {
  return (
    <Quiz
      questions={questions}
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
};

Grit.defaultProps = {
  questions,
};
