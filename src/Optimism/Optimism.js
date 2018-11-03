import React from 'react';
import PropTypes from 'prop-types';
import { questions as questionsData, answers as answersData } from './data';
import { Quiz } from '../Quiz';
import { Emoji } from '../Emoji';
import { colors } from '../styles';

export const Optimism = props => {
  return (
    <Quiz
      {...props}
      name="Optimism"
      background={colors.secondary.light}
      accent={colors.secondary.main}
      review={
        <>
          <h2>
            We finished Optimism! <Emoji icon="😎" label="sunglasses" />
          </h2>
          <button style={{ width: '100%', background: 'white', padding: '1rem', color: 'black' }} onClick={props.onAfterFinished}>
            Next
          </button>
        </>
      }
    />
  );
};

Optimism.propTypes = {
  onAfterFinished: PropTypes.func.isRequired,
  questions: PropTypes.array,
  answers: PropTypes.arrayOf(PropTypes.string),
};

Optimism.defaultProps = {
  questions: questionsData,
  answers: answersData,
};
