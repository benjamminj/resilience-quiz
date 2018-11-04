import styled from 'react-emotion';
import { colors } from '../styles';
import { rgba } from 'polished';

export const Card = styled('div')`
  background: ${colors.white};
  border-radius: 4px;
  box-shadow: 0 2px 4px ${rgba('#000', 0.2)};
`;

export const CardContent = styled('div')`
  padding: 1rem;
`;
