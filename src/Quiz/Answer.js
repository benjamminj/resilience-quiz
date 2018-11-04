import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { colors, above } from '../styles';
import { rgba } from 'polished';

// TODO -- abstract out a button component
const Button = styled('button')`
  color: ${colors.greyDark};
  border-width: 2px;
  border-style: solid;
  padding: 1.25rem;
  font-size: 1.25rem;
  width: 100%;
  border-radius: 4px;
  margin: 0.25rem 0;
  font-weight: bold;
  text-align: left;
  background: ${colors.white};
  box-shadow: 0 2px 4px ${rgba('#000', 0.2)};
  transition: background 50ms ease-in, border-color 50ms ease-in,
    color 50ms ease-in;

  ${props =>
    props.active &&
    css`
      background: ${props.color};
      border-color: ${props.color};
      /* TODO -- allow configurable color */
      color: ${colors.white};
    `};

  &:active {
    background: ${props => props.color};
    border-color: ${props => props.color};
    color: ${colors.white};
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Answer = ({ children, color, active, onClick }) => (
  <Button type="button" color={color} active={active} onClick={onClick}>
    {children}
  </Button>
);

Answer.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
