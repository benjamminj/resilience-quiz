import React from 'react';
import { Link } from '@reach/router';
import styled from 'react-emotion';
import { Container } from '../Container';
import { colors } from '../styles';

const HomeWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  background: ${colors.primary.light};
`;

const Cta = styled(Link)`
  padding: 1rem;
  background: ${colors.primary.dark};
  border: 1px solid ${colors.primary.dark};
  border-radius: 4px;
  color: ${colors.white};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`

export const Home = () => (
  <HomeWrapper>
    <h1>Resilience.</h1>

    <Cta to="/grit/0">Get started</Cta>
  </HomeWrapper>
);
