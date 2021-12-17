import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Prominents = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 25.0006C50 38.8077 38.8071 50.0006 25 50.0006C11.1929 50.0006 0 38.8077 0 25.0006C0 11.1935 11.1929 0.000610352 25 0.000610352C38.8071 0.000610352 50 11.1935 50 25.0006ZM39.1425 19.0243C39.6942 19.1045 40.1525 19.491 40.3249 20.0213C40.4972 20.5516 40.3535 21.1337 39.9543 21.523L33.54 27.7753L35.0543 36.6038C35.1485 37.1534 34.9226 37.7088 34.4715 38.0365C34.0237 38.3618 33.4261 38.4094 32.9288 38.1481L25.0003 33.9798L17.0718 38.1481C16.5782 38.4075 15.9803 38.3643 15.5291 38.0365C15.078 37.7088 14.8521 37.1533 14.9464 36.6038L16.4606 27.7753L10.0463 21.523C9.64707 21.1338 9.50332 20.5517 9.67559 20.0214C9.84785 19.4911 10.3063 19.1046 10.8581 19.0244L19.7225 17.7364L23.6867 9.70393C23.9335 9.20383 24.4428 8.88733 25.0003 8.88733C25.5578 8.88733 26.0671 9.20383 26.3139 9.70383L30.2781 17.7363L39.1425 19.0243Z"
        fill={color}
      />
    </svg>
  )
);

export default Prominents;
