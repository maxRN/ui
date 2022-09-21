import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Error = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 20, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 20.5001C16.0228 20.5001 20.5 16.023 20.5 10.5001C20.5 4.97727 16.0228 0.500122 10.5 0.500122C4.97715 0.500122 0.5 4.97727 0.5 10.5001C0.5 16.023 4.97715 20.5001 10.5 20.5001ZM15.4375 7.0912L11.8155 10.7132L15.4638 14.309C15.6213 14.4665 15.7 14.6503 15.7 14.8865C15.7 15.1227 15.6213 15.3064 15.4638 15.4639C15.3063 15.6214 15.1226 15.7001 14.8864 15.7001C14.6501 15.7001 14.4664 15.6214 14.3089 15.4639L10.6869 11.8419L7.06483 15.4639C6.77612 15.7789 6.25118 15.7789 5.93622 15.4639C5.77874 15.3064 5.7 15.0964 5.7 14.8865C5.7 14.6765 5.77874 14.4928 5.93622 14.3353L9.55827 10.7132L5.93622 7.0912C5.77874 6.93372 5.7 6.72374 5.7 6.51377C5.7 6.3038 5.77874 6.12007 5.93622 5.96259C6.25118 5.64763 6.74987 5.64763 7.06483 5.96259L10.6869 9.58464L14.3089 5.93634C14.5976 5.62138 15.1226 5.62138 15.4375 5.93634C15.595 6.09382 15.6738 6.27755 15.6738 6.51377C15.6738 6.74999 15.595 6.93372 15.4375 7.0912Z"
        fill={color}
      />
    </svg>
  )
);

export default Error;
