import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent } from '../Card';
import styled, { css } from 'react-emotion';
import { colors } from '../styles';
import { REVERSE_SCORING } from '../constants';
import {Answer} from './Answer';

const QuestionCard = styled(Card)`
  display: none;

  ${({ isVisible }) =>
    isVisible &&
    css`
      display: block;
    `};
`;

const List = styled('ul')`
  display: flex;
  flex-direction: column;
`;

export const Question = ({
  id,
  color,
  question,
  scoring,
  answers,
  isVisible,
  handleInputChange,
  selection,
}) => (
  <QuestionCard
    isVisible={isVisible}
    data-testid={isVisible ? 'visible' : null}
  >
    <CardContent>
      <h2>{question}</h2>
      <List>
        {answers.map((answer, j) => (
          <li key={j}>
            <Answer
              color={color}
              active={
                // TODO -- clean up
                scoring === REVERSE_SCORING
                  ? answers.length - selection === j
                  : selection === j + 1
              }
              onClick={() => handleInputChange(j + 1)}
            >
              {answer}
            </Answer>
          </li>
        ))}
      </List>
    </CardContent>
  </QuestionCard>
);

Question.propTypes = {
  color: PropTypes.string,
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  isVisible: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  scoring: PropTypes.string.isRequired,
  selection: PropTypes.number,
};

Question.defaultProps = {
  color: colors.primary.dark,
  selection: null,
};
