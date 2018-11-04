import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { above, breakpoints } from '../styles';

export const Container = styled('div')`
  max-width: 100vw;
  margin: 0 auto;

  ${props => props.size === 'sm' && above.sm(css`
    max-width: ${breakpoints.sm}px
  `)};

  ${props => props.size === 'md' && above.md(css`
    max-width: ${breakpoints.lg}px;
  `)};
`

Container.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['sm', 'md'])
}

Container.defaultProps = {
  size: 'md',
}
