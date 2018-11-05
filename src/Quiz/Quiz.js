import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { REVERSE_SCORING } from '../constants';
import { Container } from '../Container';
import styled, { css } from 'react-emotion';
import { above, colors, fonts, fontWeight } from '../styles';
import { navigate } from '@reach/router';
import { Answer } from './Answer';
import { Slide } from '../Slide';
import { PageLayout } from '../PageLayout';

const QuizPageLayout = styled(PageLayout)`
  ${above.md(css`
    display: flex;
    align-items: center;
  `)};
`;

const QuizContainer = styled(Container)`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${above.md(css`
    display: flex;
    flex-direction: row;
  `)};
`;

const H1 = styled('h1')`
  font-size: 1.5rem;
  margin: 0;
`

const DesktopOnlyHeader = styled('h1')`
  display: none;
  font-size: 1.5rem;
  font-family: ${fonts.primary};

  ${above.md(css`
    display: block;
    order: -1;
  `)};
`;

const QuestionSection = styled('div')`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  
  ${above.md(css`
    margin-right: 4rem;
    width: 50%;
  `)};
`;

const Question = styled('h2')`
  font-size: 2rem;
  font-family: ${fonts.primary};
  font-weight: ${fontWeight.semiBold};
  flex-grow: 1;
  display: flex;
  align-items: center;

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
      <QuizPageLayout
        header={<H1>{name}</H1>}
        transition={Slide}
        background={background}
      >
        <QuizContainer>
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
        </QuizContainer>
      </QuizPageLayout>
    );
  }
}

Quiz.propTypes = {
  selections: PropTypes.object,
  background: PropTypes.string,
  name: PropTypes.string.isRequired,
  addScore: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      scoring: PropTypes.string.isRequired,
    })
  ).isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Quiz.defaultProps = {
  selections: {},
  background: colors.primary.light,
  accent: colors.primary.main,
};
