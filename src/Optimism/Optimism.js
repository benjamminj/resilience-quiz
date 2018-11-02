import React from 'react';
import PropTypes from 'prop-types';
import { questions as questionsData, answers as answersData } from './data';
import { Quiz } from '../Quiz';
import { Emoji } from '../Emoji';

export const Optimism = (props) => {
  return (
    <Quiz
      {...props}
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
  answers: PropTypes.arrayOf(PropTypes.string),
};

Optimism.defaultProps = {
  questions: questionsData,
  answers: answersData,
};
