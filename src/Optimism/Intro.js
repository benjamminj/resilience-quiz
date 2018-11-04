import React from 'react';
import { Emoji } from '../Emoji';
import { ButtonLink } from '../Button';
import styled from 'react-emotion';
import { Container } from '../Container';
import { colors } from '../styles';
import { Fade } from '../Fade';
import { PageLayout } from '../PageLayout';

const IntroLayout = styled(PageLayout)`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Cta = styled(ButtonLink)`
  color: ${colors.white};
`;

const H2 = styled('h2')`
  font-size: 2rem;
`;

const H3 = styled('h3')`
  font-size: 1.5rem;
  margin: 1em 0;
  font-weight: normal;
`;

export const Intro = ({ linkTo }) => (
  <IntroLayout background={colors.secondary.light} transition={Fade}>
    <Container>
      <H2>
        Thanks <Emoji icon="🎉" label="confetti" />
      </H2>
      <H3>
        Now that we've gotten the details on how much grit you have, only a few
        more to go.
      </H3>
      <Cta color={colors.secondary.main} to={linkTo}>Ok, let's do this!</Cta>
    </Container>
  </IntroLayout>
);
