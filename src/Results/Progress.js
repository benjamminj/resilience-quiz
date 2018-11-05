import React from 'react';
import styled, { css } from 'react-emotion';
import { above, colors } from '../styles';
import { ProgressIcon } from './ProgressIcon';
// import { ReactComponent as CircleSvg } from './progress.svg';
import posed from 'react-pose';

const radius = 45;
const circleX = 50;
const circleY = 50;
// in order to make a progress meter, create an "empty space" in the circle
const dashArray = 2 * Math.PI * radius;
const size = '15rem';

const Circle = styled(ProgressIcon)`
  width: 100%;
  height: 100%;
  /* fill: white; */
  /* transform: rotate(-90deg); */
  position: absolute;
  margin: 0 auto;
  top: 0;

  ${above.md(css`
    margin: 2rem auto;
  `)};
`;

const ProgressWrapper = styled('span')`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${size};
  width: ${size};
  margin: 0 auto;
`;

export const Progress = ({ percent }) => (
  <ProgressWrapper>
    <Circle percent={percent / 100} />
    <span>{percent}%</span>
  </ProgressWrapper>
);
