import React from 'react';
import { Emoji } from '../Emoji';
import { Link } from '@reach/router';
import styled from 'react-emotion';
import {Container} from '../Container';
import {colors} from '../styles';

// TODO -- move into optimism folder
const ReviewLayout = styled(Container)`
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
`

export const Review = ({ linkTo }) => (
  <ReviewLayout>
    <h2>
      We finished grit! <Emoji icon="🎉" label="confetti" />
    </h2>
    <Cta
      to={linkTo}
    >
      Next
    </Cta>
  </ReviewLayout>
);