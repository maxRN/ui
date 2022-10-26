import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Audio = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 40 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M12.8874 5.67158C12.4169 5.76242 12.0769 6.17426 12.0769 6.65345V34.8221C11.0142 34.6963 9.83203 34.7248 8.58157 34.9454C4.02226 35.7489 0.327148 38.7183 0.327148 41.577C0.327148 44.4357 4.02226 46.1015 8.58157 45.298C13.1402 44.4945 15.5238 41.5252 15.5238 38.6664V14.199L36.2272 10.5481V30.3317C35.1651 30.2059 33.9836 30.235 32.7318 30.4556C28.1719 31.2591 24.4774 34.2285 24.4774 37.0872C24.4774 39.946 28.1719 41.6118 32.7318 40.8083C37.2899 40.0047 39.6741 37.0354 39.6741 34.1767V1.71153C39.6741 1.08321 39.1014 0.610555 38.4845 0.729663L12.8874 5.67158Z"
        fill={color}
      />
    </svg>
  )
);

export default Audio;
