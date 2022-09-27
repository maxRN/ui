import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const CheckBoxUnchecked = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = '#F8FAFB', stroke = '#DFE7ED', size, disabled, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect x="0.5" y="0.5" width="15" height="15" rx="0.5" fill={disabled ? '#F3F7FA' : color} stroke={stroke} />
      <rect x="0.5" y="0.5" width="15" height="15" rx="0.5" stroke="#CCD6DE" />
    </svg>
  )
);

export default CheckBoxUnchecked;
