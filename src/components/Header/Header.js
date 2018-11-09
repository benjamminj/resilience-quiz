import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import posed from 'react-pose';
import { rgba } from 'polished';
import { above, colors, headerHeight } from '../../styles';
import { ReactComponent as ArrowIcon } from '../../icons/arrow-left.svg';

const PosedHeader = posed.header({
  init: { opacity: 1 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
})

const StyledHeader = styled(PosedHeader)`
  background: ${colors.white};
  border-bottom: 1px solid ${colors.greyLight};
  box-shadow: 0 2px 10px ${rgba('#000', 0.15)};
  padding: 1rem;
  height: ${headerHeight};
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1;

  ${above.md(css`
    display: none;
  `)};
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

export const Header = ({ back, children, ...props }) => (
  <StyledHeader {...props}>
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
