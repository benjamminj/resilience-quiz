import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { colors, headerHeight } from '../styles';
import { ReactComponent as ArrowIcon } from '../icons/arrow-left.svg';

const StyledHeader = styled('header')`
  background: ${colors.white};
  border-bottom: 1px solid ${colors.greyLight};
  padding: 1rem;
  height: ${headerHeight};
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const SrOnly = styled('span')`
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
`;

const Arrow = styled(ArrowIcon)`
  fill: ${colors.greyDark};
  width: 16px;
`;

const BackButton = styled('button')`
  margin-right: 0.5rem;
  text-align: left;
`;
// grid column 2
const ChildSpacer = styled('div')`
  grid-column: 2 / 3;
  text-align: center;
`;

export const Header = ({ back, children }) => (
  <StyledHeader>
    {back && (
      <div>
        <BackButton type="button" onClick={back}>
          <Arrow />
          <SrOnly>Back</SrOnly>
        </BackButton>
      </div>
    )}
    <ChildSpacer>{children}</ChildSpacer>
  </StyledHeader>
);

Header.propTypes = {
  back: PropTypes.func,
  children: PropTypes.node,
};

Header.defaultProps = {
  back: null,
  children: null,
};
