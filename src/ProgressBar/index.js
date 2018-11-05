import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { colors } from '../styles';
import posed from 'react-pose';

const ProgressBarContainer = styled('div')`
  border: 1px solid ${colors.greyDark};
  border-radius: 4px;
  overflow: hidden;
  height: 1.5rem;
  width: 100%;
  position: relative;
`;

const PosedDiv = posed.div({
  init: { x: '-100%' },
  enter: { x: 0, transition: { delay: 300, duration: 500 } },
});
const Progress = styled(PosedDiv)`
  width: ${({ amount }) => amount}%;
  position: absolute;
  border: 1px solid ${({ color }) => color};
  background: ${({ color }) => color};
  height: 100%;

  ${({ amount }) =>
    /* 
     * Make sure that the progress doesn't cut corners 
     * when at 100% width
     */
    amount !== 100 &&
    css`
      border-radius: 0 4px 4px 0;
    `};
`;

export const ProgressBar = ({ color, progress }) => (
  <ProgressBarContainer>
    <Progress amount={progress} color={color} />
  </ProgressBarContainer>
);

ProgressBar.propTypes = {
  progress: PropTypes.number,
  color: PropTypes.string,
};

ProgressBar.defaultProps = {
  progress: 100,
  color: colors.primary.main,
};
