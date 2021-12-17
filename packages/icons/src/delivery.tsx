import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Delivery = intrinsicComponent<IconProps, SVGSVGElement>(
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
        d="M44.8032 36.6355V29.0878H26.462V24.3703H34.6242C39.0735 24.3703 42.6934 20.7375 42.6934 16.278C42.7082 12.3969 40.0288 9.13586 36.3813 8.31975V7.58166C36.3813 3.40149 32.9925 0.000610352 28.8272 0.000610352H28.2386C24.5733 0.000610352 21.5094 2.63401 20.8266 6.11438H19.4754C15.6236 6.11438 12.4152 8.93137 11.7881 12.6203C9.14922 13.2213 7.17324 15.5944 7.17324 18.422C7.17324 21.702 9.83213 24.3704 13.1005 24.3704H23.5381V29.0879H5.19668V36.6356H0V50.0006H13.3175V36.6355H8.1207V32.0224H23.538V36.6355H18.5455V50.0006H31.8629V36.6355H26.462V32.0224H41.8792V36.6355H36.6825V50.0006H50V36.6355H44.8032Z"
        fill={color}
      />
    </svg>
  )
);

export default Delivery;
