import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Pin = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 14, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M49.8488 12.0204C51.0954 10.77 49.5144 7.15948 46.3109 3.95619C43.1453 0.789986 39.5937 -0.784023 38.3025 0.386318L38.2774 0.362206L20.533 16.3025C17.2523 13.4425 12.2914 13.5401 9.16634 16.6636C8.64038 17.1905 8.34396 17.9045 8.34396 18.6495C8.34396 19.3945 8.64028 20.1087 9.16634 20.6347L17.2163 28.6857L0.673474 47.3627C0.147624 47.9552 0.135979 48.86 0.675006 49.4675C1.25612 50.1217 2.25797 50.1818 2.91365 49.5997L21.563 33.0344L29.6098 41.0813C30.1359 41.6071 30.8498 41.9026 31.5939 41.9026C32.3373 41.9026 33.0517 41.6065 33.5775 41.0795C36.6992 37.9559 36.7976 32.9921 33.939 29.7112L49.7925 12.0536C49.8085 12.0395 49.834 12.0363 49.8488 12.0204Z" fill={color} />
  </svg>
));

export default Pin;
