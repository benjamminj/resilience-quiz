import { css } from 'emotion';

export const breakpoints = {
  sm: 520,
  md: 780,
  lg: 920,
  xl: 1200,
};

/**
 * @description 
 * For each `entry` in `breakpoints`, 
 * create a media query utility for `above` that breakpoint.
 * 
 * @example
 * ```javascript
 * .selector {
 *    display: none;
 *
 *    ${above.sm(css`display: block;`)};
 * }
 * ```
 */
export const above = Object.entries(breakpoints).reduce(
  (obj, [size, value]) => {
    obj[size] = styles => css`
      @media (min-width: ${value}px) {
        ${styles};
      }
    `;

    return obj;
  },
  {}
);
