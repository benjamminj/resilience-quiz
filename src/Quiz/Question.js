import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Quiz.module.scss'; // TODO -- separate scss

export const Question = ({
  id,
  question,
  answers,
  isVisible,
  handleInputChange,
}) => (
  <div className={cx(styles.question, isVisible && styles.isVisible)}>
    <h2>{question}</h2>
    <ul className={styles.ul}>
      {answers.map((answer, j) => (
        <li key={j} className={styles.li}>
          {/* TODO -- better id */}
          <button
            className={styles.answer}
            onClick={() => handleInputChange(j + 1)}
          >
            {answer}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

Question.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  isVisible: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
