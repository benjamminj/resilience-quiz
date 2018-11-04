import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { headerHeight, colors } from '../styles';
import { Header } from '../Header/Header';

const ContentWrapper = styled('div')`
  min-height: 100vh;
  background-color: ${props => props.background};

  ${props =>
    props.header &&
    css`
      padding: calc(${headerHeight} + 1rem) 1rem 1rem;
    `};
`;

export const PageLayout = ({
  background,
  className,
  children,
  header,
  transition: Transition,
}) => (
  <>
    {header && <Header>{header}</Header>}
    <Transition>
      <ContentWrapper
        background={background}
        header={header}
        className={className}
      >
        {children}
      </ContentWrapper>
    </Transition>
  </>
);

PageLayout.propTypes = {
  background: PropTypes.string,
  className: PropTypes.string,
  header: PropTypes.node,
  /** Expects a posed component to handle the route transition */
  transition: PropTypes.node.isRequired,
};

PageLayout.defaultProps = {
  background: colors.white,
  className: null,
  header: null,
};
