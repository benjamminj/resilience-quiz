import React from 'react';
import styled from 'react-emotion';
import { colors, fonts } from '../styles';
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

const H1 = styled('h1')`
  font-family: ${fonts.primary};
  font-size: 3rem;
`;

const Cta = styled(ButtonLink)`
  color: ${colors.white};
`;

export const Home = () => (
  <HomeLayout background={colors.primary.light} transition={Fade}>
    <H1>Resilience.</H1>

    <Cta color={colors.primary.dark} to="/grit/0">
      Get started
    </Cta>
  </HomeLayout>
);
