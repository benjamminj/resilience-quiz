import styled, { css } from 'react-emotion';
import { above, breakpoints } from '../styles';

export const Container = styled('div')`
  max-width: 100vw;

  ${above.md(css`
    max-width: ${breakpoints.lg}px;
    margin: 0 auto;
  `)};
`

