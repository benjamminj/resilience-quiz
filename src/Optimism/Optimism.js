import React from 'react';
import PropTypes from 'prop-types';
import { optimism } from '../__data__';
import { Quiz } from '../Quiz';

export const Optimism = ({ questions }) => {
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

Optimism.propTypes = {
  questions: PropTypes.array,
};

Optimism.defaultProps = {
  questions: optimism,
};
