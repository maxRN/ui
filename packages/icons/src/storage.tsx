import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Storage = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 46 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M45.7369 13.9766V24.0006C45.7369 30.2785 35.5558 35.369 23 35.369C10.4442 35.369 0.263184 30.2785 0.263184 24.0006V13.9766C0.263184 20.2545 10.4442 25.345 23 25.345C35.5558 25.345 45.7369 20.2545 45.7369 13.9766ZM0.263184 26.5602C0.263184 32.8381 10.4442 37.9286 23 37.9286C35.5558 37.9286 45.7369 32.8381 45.7369 26.5602V36.6322C45.7369 42.9101 35.5558 48.0006 23 48.0006C10.4442 48.0006 0.263184 42.9101 0.263184 36.6322V26.5602ZM23 22.7375C10.4442 22.7375 0.263184 17.6469 0.263184 11.369C0.263184 5.09114 10.4442 0.000610352 23 0.000610352C35.5558 0.000610352 45.7369 5.09114 45.7369 11.369C45.7369 17.6469 35.5558 22.7375 23 22.7375Z"
        fill={color}
      />
    </svg>
  )
);

export default Storage;
