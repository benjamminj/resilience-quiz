import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { Router, Location } from '@reach/router';

const RouteContainer = posed.div({
  init: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 300 }, beforeChildren: 500 },
  exit: {
    opacity: 0,
    afterChildren: 500,
    transition: { duration: 300 }
  },
});

export const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <PoseGroup animateOnMount preEnterPose="init">
        <RouteContainer key={location.key} initialPose="init">
          <Router location={location}>{children}</Router>
        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
);
