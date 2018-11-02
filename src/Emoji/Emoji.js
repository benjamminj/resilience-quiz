import React from 'react';
import PropTypes from 'prop-types';

export const Emoji = ({ icon, label }) => (
  <span role="img" aria-label={label}>
    {icon}
  </span>
);

Emoji.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}