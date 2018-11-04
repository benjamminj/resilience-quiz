import React from 'react';
import { Emoji } from '../Emoji';
import { Link } from '@reach/router';
import styled from 'react-emotion';
import { rgba } from 'polished';
import { Container } from '../Container';
import { colors } from '../styles';
import { Fade } from '../Fade';

const IntroLayout = styled('div')`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  background: ${colors.secondary.light};
`;

const Cta = styled(Link)`
  padding: 1rem;
  background: ${colors.secondary.main};
  border-radius: 4px;
  color: ${colors.white};
  text-decoration: none;
  min-width: 50%;
  font-weight: bold;
  box-shadow: 0 2px 4px ${rgba('#000', 0.2)};
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
  <Fade>
    <IntroLayout>
      <Container>
        <H2>
          Thanks <Emoji icon="🎉" label="confetti" />
        </H2>
        <H3>
          Now that we've gotten the details on how much grit you have, only a few
          more to go.
        </H3>
        <Cta to={linkTo}>Ok, let's do this!</Cta>
      </Container>
    </IntroLayout>
  </Fade>
);
