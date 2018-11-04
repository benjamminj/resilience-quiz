import React from 'react';
import styled from 'react-emotion';
import { colors } from '../styles';
import { PageLayout } from '../PageLayout';
import { Fade } from '../Fade';
import { ButtonLink } from '../Button';

const HomeLayout = styled(PageLayout)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Cta = styled(ButtonLink)`
  color: ${colors.white};
`;

export const Home = () => (
  <HomeLayout background={colors.primary.light} transition={Fade}>
    <h1>Resilience.</h1>

    <Cta color={colors.primary.main} to="/grit/0">Get started</Cta>
  </HomeLayout>
);
