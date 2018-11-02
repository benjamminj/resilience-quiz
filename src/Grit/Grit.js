import React from 'react';
import PropTypes from 'prop-types';
import { grit } from '../__data__';
import { Quiz } from '../Quiz';

export const Grit = ({ questions }) => {
  return (
    <Quiz
      questions={questions}
      review={
        <h2>
          Review / Go to next page{' '}
          <span role="img" aria-label="confetti icon">
            🎉
          </span>
        </h2>
      }
    />
  );
};

Grit.propTypes = {
  questions: PropTypes.array,
};

Grit.defaultProps = {
  questions: grit,
};
