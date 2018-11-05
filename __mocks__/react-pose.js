import React from 'react';

const pose = (name) => () => ({ children, ...props}) => {
  const { initialPose, ...rest } = props;
  return React.createElement(name, rest, children);
}


pose.header = pose('header')
pose.div = pose('div')
pose.button = pose('button')
pose.circle = pose('circle')

export default pose;

export const PoseGroup = ({ children }) => <>{children}</>