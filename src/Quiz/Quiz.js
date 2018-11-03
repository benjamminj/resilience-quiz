import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Question } from './Question';
import { Header } from '../Header/Header';
import { Container } from '../Container';
import styled from 'react-emotion';
import { headerHeight, colors } from '../styles';

// TODO -- dynamic color
const QuizContainer = styled(Container)`
  background: ${({ background }) => background};
  padding-top: calc(${headerHeight} + 1rem);
  min-height: 100vh;
`;

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
    const { name, background, answers, questions, review } = this.props;
    const { index } = this.state;

    return (
      <div>
        <Header back={index !== 0 ? this.gotoPrevious : null}>{name}</Header>

        <QuizContainer background={background}>
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
        </QuizContainer>
      </div>
    );
  }
}

Quiz.propTypes = { 
  background: PropTypes.string,
  name: PropTypes.string.isRequired,
  addScore: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
  review: PropTypes.node.isRequired,
};

Quiz.defaultProps = {
  background: colors.primaryLight,
}