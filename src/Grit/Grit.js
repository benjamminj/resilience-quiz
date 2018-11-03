import React from 'react';
import PropTypes from 'prop-types';
import { questions as questionsData, answers as answersData } from './data';
import { Quiz } from '../Quiz';
import { Emoji } from '../Emoji';
import { colors } from '../styles';

export const Grit = props => {
  return (
    <Quiz
      {...props}
      name="Grit"
      accent={colors.primary.dark}
      review={
        <>
          <h2>
            We finished grit! <Emoji icon="🎉" label="confetti" />
          </h2>
          <button style={{ width: '100%', background: 'white', padding: '1rem', color: 'black' }} onClick={props.onAfterFinished}>
            Next
          </button>
        </>
      }
    />
  );
};

Grit.propTypes = {
  onAfterFinished: PropTypes.func.isRequired,
  questions: PropTypes.array,
  answers: PropTypes.arrayOf(PropTypes.string),
};

Grit.defaultProps = {
  questions: questionsData,
  answers: answersData,
};
