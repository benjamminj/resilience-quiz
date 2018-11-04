import React from 'react';
import { Link } from '@reach/router';
import styled from 'react-emotion';
import { Container } from '../Container';
import { colors } from '../styles';
import { PageLayout } from '../PageLayout';
import { Fade } from '../Fade';

const HomeLayout = styled(PageLayout)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
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
`;

export const Home = () => (
  <HomeLayout background={colors.primary.light} transition={Fade}>
    <h1>Resilience.</h1>

    <Cta to="/grit/0">Get started</Cta>
  </HomeLayout>
);
