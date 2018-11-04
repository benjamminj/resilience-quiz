import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { REVERSE_SCORING } from '../constants';
import { Header } from '../Header/Header';
import { Container } from '../Container';
import styled, { css } from 'react-emotion';
import { above, headerHeight, colors } from '../styles';
import { navigate } from '@reach/router';
import { Answer } from './Answer';
import { Slide } from '../Slide';

const QuizContainer = styled('div')`
  padding-top: ${headerHeight};
  min-height: 100vh;

  ${above.md(css`
    padding-top: 0;
  `)};
`;

const QuizBackground = styled('div')`
  padding: 1rem;
  min-height: calc(100vh - ${headerHeight});
  background: ${props => props.background};

  ${above.md(css`
    min-height: 100vh;
    display: flex;
    align-items: center;
  `)};
`;

const QuizLayout = styled(Container)`
  /* TODO -- check on Safari & use flex fallback if necessary */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${above.md(css`
    display: flex;
    flex-direction: row;
  `)};
`;

const DesktopOnlyHeader = styled('h1')`
  display: none;
  font-size: 1.5rem;

  ${above.md(css`
    display: block;
    order: -1;
  `)};
`;

const QuestionSection = styled('div')`
  display: flex;
  flex-direction: column;

  ${above.md(css`
    margin-right: 4rem;
    width: 50%;
  `)};
`;

const Question = styled('h2')`
  font-size: 2rem;

  ${above.md(css`
    text-align: left;
    font-size: 2.25rem;
  `)};
`;

const QuestionNumber = styled('h3')`
  /**
   * Keep the h3 below the h2 for SEO / a11y purposes,
   * but make it appear "above" the h2
   */
  order: -1;
  margin: 0;
  font-weight: normal;

  ${above.md(css`
    order: -1;
  `)};
`;

const AnswersList = styled('ul')`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;

  ${above.md(css`
    width: 50%;
  `)};
`;

export class Quiz extends Component {
  state = {
    index: 0,
  };

  handleInputChange = value => {
    const { answers, addScore, questions, currentId, linkTo } = this.props;

    const current = questions[currentId];

    addScore(current, answers.length, value);

    const nextId = Number(currentId) + 1;
    const nextRoute = nextId < questions.length ? nextId : linkTo;

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

    return (
      <div>
        <Header>{name}</Header>
        <Slide initialPose="init">
          <QuizContainer>
            <QuizBackground background={background}>
              <QuizLayout>
                <QuestionSection>
                  <DesktopOnlyHeader>{name}</DesktopOnlyHeader>
                  <Question>{question}</Question>
                  <QuestionNumber>
                    {index + 1} of {questions.length}
                  </QuestionNumber>
                </QuestionSection>

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
              </QuizLayout>
            </QuizBackground>
          </QuizContainer>
        </Slide>
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
