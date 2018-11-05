import React from 'react';
import styled, { css } from 'react-emotion';
import { above } from '../styles';
import { ProgressIcon } from './ProgressIcon';

const size = '15rem';

const Circle = styled(ProgressIcon)`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 auto;
  top: 0;
`;

const ProgressWrapper = styled('span')`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${size};
  width: ${size};
  margin: 0 auto;

  ${above.md(css`
    margin: 2rem auto;
  `)};
`;

export const Progress = ({ percent }) => (
  <ProgressWrapper>
    <Circle percent={percent / 100} />
    <span>{percent}%</span>
  </ProgressWrapper>
);
