import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent } from '../Card';
import styled, { css } from 'react-emotion';
import { colors } from '../styles';

const QuestionCard = styled(Card)`
  display: none;

  ${({ isVisible }) =>
    isVisible &&
    css`
      display: block;
    `};
`;

const Button = styled('button')`
  background: transparent;
  color: ${colors.greyDark};
  border: 2px solid ${colors.greyDark};
  padding: 0.75rem;
  width: 100%;
  border-radius: 4px;
  margin: 0.25rem 0;
  font-weight: bold;
  text-align: left;

  ${props => props.active && css`
    background: ${props.color};
    border-color: ${props.color};
    /* TODO -- allow configurable color */
    color: ${colors.white};
  `}
`;

const List = styled('ul')`
  display: flex;
  flex-direction: column;
`;

export const Question = ({
  id,
  color,
  question,
  answers,
  isVisible,
  handleInputChange,
}) => (
  <QuestionCard isVisible={isVisible}>
    <CardContent>
      <h2>{question}</h2>
      <List>
        {answers.map((answer, j) => (
          <li key={j}>
            {/* TODO -- better id */}
            <Button
              type="button"
              color={color}
              active={false} // TODO -- connect
              onClick={() => handleInputChange(j + 1)}
            >
              {answer}
            </Button>
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
};

Question.defaultProps = {
  color: colors.primaryDark,
};
