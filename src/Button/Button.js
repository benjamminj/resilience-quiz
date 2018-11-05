import { colors, fontWeight } from '../styles';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { rgba, transitions } from 'polished';
import posed from 'react-pose';

export const buttonInteractions = {
  pressable: true,
  hoverable: true,
  init: { scale: 1 },
  hover: { scale: 1.01 },
  press: { scale: 0.98 },
  afterPress: { scale: 1 },
};
const PosedButton = posed.button(buttonInteractions);

export const Button = styled(PosedButton)`
  padding: 1rem;
  font-weight: ${fontWeight.bold};
  background: ${props => props.color};
  border-color: ${props => props.color};
  border-style: solid;
  border-width: 3px;
  border-radius: 4px;
  box-shadow: 0 2px 4px ${rgba('#000', 0.2)};

  ${transitions([
    'background 100ms ease-in-out',
    'border-color 100ms ease-in-out',
    'color 100ms ease-in-out',
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
