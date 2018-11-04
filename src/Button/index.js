import React from 'react';
import { colors } from '../styles';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { rgba, transitions } from 'polished';

export const Button = styled('button')`
  padding: 1rem;
  font-weight: bold;
  background: ${props => props.color};
  border-color: ${props => props.color};
  border-style: solid;
  border-width: 2px;
  border-radius: 4px;
  box-shadow: 0 2px 4px ${rgba('#000', 0.2)};
  
  ${transitions([
      'background 100ms ease-in',
      'border-color 100ms ease-in',
      'color 100ms ease-in'
    ])};

  ${props =>
    props.outline &&
    css`
      background: ${colors.white};
      border-color: ${props.greyDark};
      color: ${props.color};
    `};

  &:hover {
    cursor: pointer;
  }
`;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  outline: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  color: colors.primary.main,
  outline: false,
  type: 'button',
};
