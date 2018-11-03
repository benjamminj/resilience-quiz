import styled from 'react-emotion';
import { colors, headerHeight } from '../styles';

export const Header = styled('header')`
  background: ${colors.white};
  border-bottom: 1px solid ${colors.greyLight};
  padding: 1rem;
  height: ${headerHeight};
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;