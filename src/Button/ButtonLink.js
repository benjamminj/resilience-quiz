import React from 'react';
import { Link as RouterLink } from '@reach/router';
import { Button, buttonInteractions } from './Button';
import posed from 'react-pose';
import styled from 'react-emotion';

const Link = ({ hostRef, ...props }) => <RouterLink ref={hostRef} {...props} />;
const PosedLink = posed(Link)(buttonInteractions);

/**
 * Looks & feels exactly like the button component, but uses a link
 * under the hood for better semantics
 */
export const ButtonLink = styled(Button.withComponent(PosedLink))`
  text-decoration: none;
  display: inline-block;
`;
