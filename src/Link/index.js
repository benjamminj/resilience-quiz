import React from 'react';
import { Link as RouterLink } from '@reach/router';

export const Link = ({ hostRef, ...props }) => (
  <RouterLink ref={hostRef} {...props} />
);
