import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Question } from './Question';
import { REVERSE_SCORING } from '../constants';
import { Header } from '../Header/Header';
import { Container } from '../Container';
import styled from 'react-emotion';
import { headerHeight, colors } from '../styles';
import { navigate } from '@reach/router';
import { Answer } from './Answer';
import posed from 'react-pose';

const QuizTransition = posed.div({
  init: { x: '100%', opacity: 1 },
  enter: { x: 0, opacity: 1, transition: { duration: 500 } },
  exit: { x: '-100%', opacity: 1, transition: { duration: 500 } },
});

const QuizContainer = styled('div')`
  padding-top: ${headerHeight};
  min-height: 100vh;
`;

const QuizBackground = styled(Container)`
  min-height: calc(100vh - ${headerHeight});
  background: ${({ background }) => background};
  /* TODO -- check on Safari & use flex fallback if necessary */
  display: grid;
  grid-template-rows: auto 1fr auto;
  align-items: center;
  text-align: center;
`;

const Question = styled('h2')`
  font-size: 2rem;
`;

const QuestionNumber = styled('h3')`
  /**
   * Keep the h3 below the h2 for SEO / a11y purposes,
   * but make it appear "above" the h2
   */
  grid-row: 1;
  margin: 0;
`;

const AnswersList = styled('ul')`
  display: flex;
  flex-direction: column;
`;

export class Quiz extends Component {
  state = {
    index: 0,
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

    const index = Number(currentId);
    const { scoring, question, id } = questions[index] || {};
    const answer = selections[id];

    console.log('RENDERS', currentId);
    return (
      <div>
        <QuizTransition initialPose="init">
          <QuizContainer>
            <QuizBackground background={background}>
              <Question>{question}</Question>
              <QuestionNumber>
                {index + 1} of {questions.length}
              </QuestionNumber>

              <AnswersList>
                {answers.map((choice, i) => (
                  <li key={i}>
                    <Answer
                      color={accent}
                      active={
                        // TODO -- clean up
                        scoring === REVERSE_SCORING
                          ? answers.length - answer === i
                          : answer === i + 1
                      }
                      onClick={() => this.handleInputChange(i + 1)}
                    >
                      {choice}
                    </Answer>
                  </li>
                ))}
              </AnswersList>
            </QuizBackground>
          </QuizContainer>
        </QuizTransition>
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
};

Quiz.defaultProps = {
  selections: {},
  background: colors.primary.light,
  accent: colors.primary.main,
};
