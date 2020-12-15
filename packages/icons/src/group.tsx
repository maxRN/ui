import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Group = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 14, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size * (51 / 50)}
    height={size}
    viewBox="0 0 51 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M42.9815 26.9387H39.0703C39.4931 27.9958 39.7046 29.1586 39.7046 30.4271V45.0148C39.7046 45.5433 39.5989 45.9662 39.4931 46.4947H45.9413C48.3726 46.4947 50.2754 44.592 50.2754 42.1607V34.2326C50.2754 30.2156 46.9984 26.9387 42.9815 26.9387Z" fill={color} />
    <path d="M10.6348 30.4271C10.6348 29.2643 10.8462 27.9958 11.269 26.9387H7.46355C3.44664 26.9387 0.275391 30.2156 0.275391 34.1269V42.1607C0.275391 44.592 2.17814 46.4947 4.60943 46.4947H11.0576C10.8462 46.0719 10.8462 45.5433 10.8462 45.0148V30.4271H10.6348Z" fill={color} />
    <path d="M29.6623 23.1332H20.7828C16.7659 23.1332 13.5946 26.4102 13.5946 30.4271V45.0148C13.5946 45.8605 14.2289 46.4947 15.0745 46.4947H35.4762C36.3219 46.4947 36.9561 45.8605 36.9561 45.0148V30.4271C36.8504 26.4102 33.6792 23.1332 29.6623 23.1332Z" fill={color} />
    <path d="M25.2225 4C20.4657 4 16.5545 7.91121 16.5545 12.6681C16.5545 15.945 18.3515 18.7992 20.9942 20.2791C22.2627 21.019 23.7426 21.4419 25.2225 21.4419C26.8082 21.4419 28.1824 21.019 29.4509 20.2791C32.0936 18.7992 33.8906 15.945 33.8906 12.6681C33.8906 7.91121 29.9794 4 25.2225 4Z" fill={color} />
    <path d="M10.0005 12.1395C6.40647 12.1395 3.55235 15.0994 3.55235 18.5877C3.55235 22.0761 6.51218 25.0359 10.0005 25.0359C10.9519 25.0359 11.7976 24.8245 12.5375 24.5074C13.9118 23.8732 14.9688 22.9218 15.7088 21.5476C16.2373 20.5962 16.4488 19.6448 16.4488 18.482C16.4488 14.9937 13.5946 12.1395 10.0005 12.1395Z" fill={color} />
    <path d="M40.4445 12.1395C36.8504 12.1395 33.9963 15.0994 33.9963 18.5877C33.9963 19.6448 34.3134 20.7019 34.7363 21.6533C35.4762 22.9218 36.5333 23.9789 37.9075 24.6131C38.6475 24.9302 39.5989 25.1417 40.4445 25.1417C44.0386 25.1417 46.8927 22.1818 46.8927 18.6934C46.8927 15.2051 44.0386 12.1395 40.4445 12.1395Z" fill={color} />
  </svg>
));

export default Group;
