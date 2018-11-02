import React from 'react';
import PropTypes from 'prop-types';
import questions from './questions';
import { Quiz } from '../Quiz';
import { Emoji } from '../Emoji';

export const Optimism = ({ questions }) => {
  return (
    <Quiz
      questions={questions}
      review={
        <h2>
          We finished Optimism! <Emoji icon="😎" label="sunglasses" />
        </h2>
      }
    />
  );
};

Optimism.propTypes = {
  questions: PropTypes.array,
};

Optimism.defaultProps = {
  questions: questions,
};
