import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Quiz.module.css';

export class Quiz extends Component {
  state = {
    index: 0,
  };

  gotoNext = () => {
    const { questions } = this.props;
    const { index } = this.state;
    this.setState({ index: Math.min(index + 1, questions.length) });
  };

  gotoPrevious = () => {
    const { index } = this.state;
    this.setState({ index: Math.max(index - 1, 0) });
  };

  render() {
    const { questions, review } = this.props;
    const { index } = this.state;

    const current = questions[index];

    return (
      <div>
        {index < questions.length ? <h2>{current.question}</h2> : review}
        {index !== 0 && (
          <button className={styles.button} onClick={this.gotoPrevious}>
            back
          </button>
        )}
        {index < questions.length && (
          <button className={styles.button} onClick={this.gotoNext}>
            next
          </button>
        )}
      </div>
    );
  }
}

Quiz.propTypes = {
  questions: PropTypes.array,
  review: PropTypes.node,
};
