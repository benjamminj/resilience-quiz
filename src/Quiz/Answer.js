import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { colors } from '../styles';
import { Button } from '../Button';

const StyledButton = styled(Button)`
  padding: 1.25rem;
  font-size: 1.25rem;
  width: 100%;
  margin: 0.25rem 0;
  text-align: left;
  
  ${props =>
    props.active &&
    css`
      color: ${colors.white};
    `};
`;

export const Answer = ({ children, color, active, onClick }) => (
  <StyledButton
    outline={!active}
    color={active ? color : colors.greyDark}
    active={active}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

Answer.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
