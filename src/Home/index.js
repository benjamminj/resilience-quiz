import React from 'react';
import PropTypes from 'prop-types';

export const Home = ({ start }) => (
  <>
    <h1>Welcome to Resilience.</h1>

    <button onClick={start}>Get started</button>
  </>
);

Home.propTypes = {
  start: PropTypes.func.isRequired,
};
