import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Question } from './Question';
import { Header } from '../Header/Header';
import { Container } from '../Container';
import styled from 'react-emotion';
import { headerHeight, colors } from '../styles';
import { navigate } from '@reach/router';

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
    const { answers, addScore, questions, currentId } = this.props;

    const current = questions[currentId];

    addScore(current, answers.length, value);

    const nextId = Number(currentId) + 1;
    const nextRoute = nextId < questions.length ? nextId : 'review';

    navigate(nextRoute);
  };

  render() {
    const {
      currentId,
      accent,
      name,
      background,
      answers,
      questions,
      selections,
    } = this.props;

    const index = currentId;
    const { scoring, question, id } = questions[index] || {};

    return (
      <div>
        <Header back={index !== 0 ? this.gotoPrevious : null}>{name}</Header>

        <QuizContainer background={background}>
          <Question
            color={accent}
            selection={selections[id]}
            answers={answers}
            question={question}
            scoring={scoring}
            key={id}
            id={`question-${id}`}
            handleInputChange={this.handleInputChange}
            isVisible={index === id}
          />
        </QuizContainer>
      </div>
    );
  }
}

Quiz.propTypes = {
  selections: PropTypes.object,
  background: PropTypes.string,
  name: PropTypes.string.isRequired,
  addScore: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
  review: PropTypes.node.isRequired,
};

Quiz.defaultProps = {
  selections: {},
  background: colors.primary.light,
  accent: colors.primary.main,
};
