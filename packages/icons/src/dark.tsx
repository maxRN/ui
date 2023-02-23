import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Dark = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.275 24.9951L24.274 24.9937C19.1873 18.1727 18.1514 10.7655 20.0962 3.22963C12.2302 4.64926 4.61395 12.4206 3.39886 22.1018L3.39883 22.1021C2.18068 31.8007 9.1673 42.6859 22.2281 44.7848L22.2293 44.785C26.4629 45.4671 31.4459 44.471 35.8165 42.2821C39.2698 40.5526 42.0514 38.2275 43.7329 35.7643C35.949 35.0344 29.2353 31.6389 24.275 24.9951ZM0.422214 21.7282C-1.00626 33.1014 7.16616 45.4028 21.7521 47.7468C31.7296 49.3542 44.2354 43.0149 47.632 34.8617C48.0346 33.8954 47.2388 32.9313 46.1922 32.9053C38.2005 32.7066 31.5236 29.6893 26.6789 23.2003C21.7803 16.6314 21.1093 9.52488 23.5601 2.07683C23.8928 1.06577 23.229 -0.0260189 22.1651 0.00427865C11.892 0.296819 1.90413 9.92099 0.422214 21.7282Z"
        fill={color}
      />
    </svg>
  )
);

export default Dark;
