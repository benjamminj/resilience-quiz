import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { Router, Location } from '@reach/router';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300 },
  exit: { opacity: 0, delay: 300, afterChildren: 300 },
});

export const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => console.log(location) || (
      <PoseGroup>
        <RouteContainer key={location.key} initialPose="init">
          <Router location={location}>{children}</Router>
        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
);
