import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Quiz.module.scss';
import { Question } from './Question';
import { Header } from '../Header/Header';

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

  handleInputChange = value => {
    const { answers, addScore, questions } = this.props;
    const { index } = this.state;

    const current = questions[index];

    addScore(current, answers.length, value);
    this.gotoNext();
  };

  render() {
    const { name, answers, questions, review } = this.props;
    const { index } = this.state;

    return (
      <div>
        <Header>{name}</Header>

        {questions.map(({ id, question }, i) => (
          <Question
            answers={answers}
            question={question}
            key={i}
            id={`question-${id}`}
            handleInputChange={this.handleInputChange}
            isVisible={index === i}
          />
        ))}

        {index >= questions.length && review}

        {index !== 0 && (
          <button className={styles.button} onClick={this.gotoPrevious}>
            back
          </button>
        )}
      </div>
    );
  }
}

Quiz.propTypes = {
  name: PropTypes.string.isRequired,
  addScore: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
  review: PropTypes.node.isRequired,
};
