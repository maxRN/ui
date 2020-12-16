import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const ZoomMinus = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 14, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M46.1834 47.5245L33.5915 36.76C29.3532 40.1655 23.8639 41.7888 18.4249 41.1647C7.23908 39.8813 -0.860675 29.837 0.405241 18.819C1.67116 7.80094 11.8382 -0.147474 23.024 1.13597C34.2099 2.41941 42.3096 12.4637 41.0437 23.4817C40.614 27.2218 39.1813 30.6419 36.8714 33.5518L49.8274 44.7678C50.1914 45.2192 50.327 45.8492 50.2573 46.4557C50.1876 47.0622 49.9243 47.5441 49.4557 48.0024C48.9988 48.3596 48.3598 48.4911 47.7441 48.4205C47.1283 48.3499 46.5358 48.077 46.1834 47.5245ZM4.61276 19.3017C3.61396 27.9948 9.98456 35.8948 18.8101 36.9075C27.6356 37.9201 35.6321 31.6685 36.6309 22.9754C37.6297 14.2823 31.2591 6.38229 22.4336 5.36966C13.7223 4.26773 5.61155 10.6086 4.61276 19.3017Z" fill={color} />
    <path d="M10.6722 21.468C10.6722 20.2999 11.6192 19.3529 12.7873 19.3529H27.5931C28.7612 19.3529 29.7082 20.2999 29.7082 21.468C29.7082 22.6362 28.7612 23.5831 27.5931 23.5831H12.7873C11.6192 23.5831 10.6722 22.6362 10.6722 21.468Z" fill={color} />
  </svg>
));

export default ZoomMinus;
