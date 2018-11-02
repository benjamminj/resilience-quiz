import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { grit } from '../__data__';

export default class Grit extends Component {
  state = {
    index: 0,
  };

  goToNext = () => {
    const index = Math.min(this.state.index + 1, grit.length);
    this.setState({ index });
  };

  goToPrevious = () => {
    const index = Math.max(this.state.index - 1, 0);
    this.setState({ index });
  };

  render() {
    const { questions } = this.props;
    const { index } = this.state;

    const currentQuestion = questions[index];

    return (
      <div>
        {index < questions.length ? (
          <h2>{currentQuestion.question}</h2>
        ) : (
          <h2>
            Review / Go to next page{' '}
            <span role="img" aria-label="confetti icon">
              🎉
            </span>
          </h2>
        )}
        <button onClick={this.goToPrevious}>prev</button>
        <button onClick={this.goToNext}>next</button>
      </div>
    );
  }
}

Grit.propTypes = {
  questions: PropTypes.array,
};

Grit.defaultProps = {
  questions: grit,
};
