import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { colors } from '../styles';
import { Button } from '../Button';
import { ReactComponent as CheckIcon } from '../icons/check.svg';

const StyledButton = styled(Button)`
  padding: 1.25rem;
  font-size: 1.25rem;
  width: 100%;
  margin: 0.25rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${props => props.active && css`
    color: ${colors.white};
  `}
`;

const Check = styled(CheckIcon)`
  width: 24px;
  height: 24px;
  stroke: ${colors.white};
  stroke-width: 2;
  fill: ${colors.white};
`

export const Answer = ({ children, color, active, onClick }) => (
  <StyledButton
    outline={!active}
    color={active ? color : colors.greyMedium}
    active={active}
    onClick={onClick}
  >
    {children}
    {active && <Check />}
  </StyledButton>
);

Answer.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
