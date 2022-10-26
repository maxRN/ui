import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const RotationLeft = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 45 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M2.66027 14.6997L3.59752 14.4437L3.09232 3.93218C3.05918 3.24262 2.47331 2.71049 1.78375 2.74363C1.09419 2.77677 0.562061 3.36263 0.595202 4.05219L1.16041 15.8123C1.19355 16.5018 1.77942 17.034 2.46898 17.0008L14.2291 16.4356C14.9186 16.4025 15.4508 15.8166 15.4176 15.1271C15.3845 14.4375 14.7986 13.9054 14.1091 13.9385L5.48447 14.353C8.23224 7.41077 15.0052 2.50049 22.925 2.50049C33.2802 2.50049 41.6748 10.8951 41.6748 21.2503C41.6748 22.4035 41.5706 23.5324 41.3713 24.6281L43.7968 25.261C44.0449 23.9622 44.1748 22.6214 44.1748 21.2503C44.1748 9.51435 34.6609 0.000488281 22.925 0.000488281C15.0467 0.000488281 8.16974 4.28779 4.50001 10.6566L2.66027 14.6997Z"
        fill={color}
      />
      <path
        d="M9.88491 34.708L8.27773 36.6309C8.82614 37.1539 9.40248 37.6479 10.0043 38.1103L11.5276 36.128C10.9528 35.6863 10.4043 35.2121 9.88491 34.708Z"
        fill={color}
      />
      <path
        d="M12.3142 39.6567C13.9038 40.5764 15.6235 41.2961 17.439 41.7814L18.0846 39.3662C16.4846 38.9385 14.9685 38.3041 13.5662 37.4928L12.3142 39.6567Z"
        fill={color}
      />
      <path
        d="M20.1654 42.3209C21.0738 42.4394 22.0002 42.5005 22.9408 42.5005C23.8815 42.5005 24.8079 42.4394 25.7162 42.3209L25.3929 39.8419C24.5915 39.9465 23.7731 40.0005 22.9408 40.0005C22.1086 40.0005 21.2902 39.9465 20.4888 39.8419L20.1654 42.3209Z"
        fill={color}
      />
      <path
        d="M28.4427 41.7814C30.2582 41.2961 31.9779 40.5764 33.5674 39.6567L32.3154 37.4928C30.9132 38.3041 29.397 38.9385 27.7971 39.3662L28.4427 41.7814Z"
        fill={color}
      />
      <path
        d="M35.8774 38.1103C37.3494 36.9791 38.6692 35.6594 39.8004 34.1873L37.8181 32.664C36.8193 33.9638 35.6538 35.1292 34.354 36.128L35.8774 38.1103Z"
        fill={color}
      />
      <path
        d="M41.3468 31.8773C42.2665 30.2878 42.9862 28.5681 43.4715 26.7526L41.0563 26.107C40.6286 27.707 39.9942 29.2231 39.1829 30.6253L41.3468 31.8773Z"
        fill={color}
      />
    </svg>
  )
);

export default RotationLeft;
