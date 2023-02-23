import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const EyeFilled = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 50 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M25 31.6256C8.64335 31.6256 0.533984 17.3662 0.196875 16.7596C-0.065625 16.2873 -0.065625 15.7135 0.196875 15.2412C0.533984 14.635 8.64335 0.37561 25 0.37561C41.3566 0.37561 49.466 14.635 49.8031 15.2416C50.0656 15.7139 50.0656 16.2877 49.8031 16.76C49.466 17.3662 41.3566 31.6256 25 31.6256ZM3.40117 15.9983C5.25977 18.8151 12.557 28.5006 25 28.5006C37.4824 28.5006 44.7473 18.8229 46.5988 16.003C44.7402 13.1862 37.443 3.50061 25 3.50061C12.5176 3.50061 5.25273 13.1783 3.40117 15.9983Z"
        fill={color}
      />
      <path
        d="M33.5286 16.0006C33.5286 20.7108 29.7102 24.5292 25 24.5292C20.2898 24.5292 16.4714 20.7108 16.4714 16.0006C16.4714 11.2903 20.2898 7.47193 25 7.47193C29.7102 7.47193 33.5286 11.2903 33.5286 16.0006Z"
        fill={color}
      />
    </svg>
  )
);

export default EyeFilled;
