import React from 'react';

export const Radio = ({ id, children, labelProps, ...rest }) => (
  <>
    <input type="radio" id={id} name={id} {...rest} />
    <label htmlFor={id}>{children}</label>
  </>
)