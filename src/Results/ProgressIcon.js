import React from 'react';
import posed from 'react-pose';
import { colors } from '../styles';
import styled, { css } from 'react-emotion';

const radius = 45;
const circleX = 50;
const circleY = 50;
// in order to make a progress meter, create an "empty space" in the circle
const dashArray = 2 * Math.PI * radius;
// const size = '15rem';

const Svg = styled('svg')`
  fill: white;
  transform: rotate(-90deg);
`;

const circleStyles = css`
  stroke-width: 6;
  cx: ${circleX};
  cy: ${circleY};
  r: ${radius};
  fill: none;
`;

const ProgressTrack = styled('circle')`
  ${circleStyles};
  stroke: ${colors.greyLight};
`;

const PosedCircle = posed.circle({
  init: { 'stroke-dashoffset': dashArray },
  enter: {
    // Spins in the progress meter to the percentage amount
    'stroke-dashoffset': props => dashArray * (1 - props.percent),
    transition: {
      duration: 500,
      delay: 300,
    }
  },
});
const ProgressMeter = styled(PosedCircle)`
  ${circleStyles}
  stroke: ${colors.primary.dark};
  stroke-dasharray: ${dashArray};
  stroke-linecap: round;
`;

export const ProgressIcon = ({ hostRef, ...props }) => (
  <Svg
    ref={hostRef}
    {...props}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ProgressTrack />
    <ProgressMeter percent={props.percent} />
  </Svg>
);
