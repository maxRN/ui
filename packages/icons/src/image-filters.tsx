import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const ImageFilters = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <g clipPath="url(#clip0)">
      <path d="M25.8185 28.3333C18.5721 28.3333 12.5938 22.8333 12.5938 16.1666C12.5938 9.5 18.5721 4 25.8185 4C33.0648 4 39.0431 9.5 39.0431 16.1666C39.0431 23 33.0648 28.3333 25.8185 28.3333ZM25.8185 5.66665C19.4779 5.66665 14.4054 10.3333 14.4054 16.1666C14.4054 22 19.4779 26.6666 25.8185 26.6666C32.1591 26.6666 37.2315 22 37.2315 16.1666C37.2315 10.3333 32.1591 5.66665 25.8185 5.66665Z" fill={color} />
      <path d="M50.2749 34.1666C50.2749 40.8861 44.354 46.3333 37.0502 46.3333C29.7465 46.3333 23.8256 40.8861 23.8256 34.1666C23.8256 27.4472 29.7465 22 37.0502 22C44.354 22 50.2749 27.4472 50.2749 34.1666Z" fill={color} />
      <path d="M13.4995 21.3332C6.25317 21.3332 0.274902 26.8332 0.274902 33.4999C0.274902 40.1665 6.25317 45.6666 13.4995 45.6666C20.7459 45.6666 26.7242 40.1665 26.7242 33.4999C26.7242 26.8332 20.927 21.3332 13.4995 21.3332ZM23.6445 28.4999L19.1155 24.3333C20.9271 25.3333 22.5575 26.6666 23.6445 28.4999ZM15.6734 23.1666L24.7314 31.4999C24.9126 32.1666 24.9126 32.8333 24.9126 33.4999C24.9126 33.6666 24.9126 33.8333 24.9126 33.9999L12.9561 22.9999C13.1372 22.9999 13.3184 22.9999 13.4995 22.9999C14.2242 22.9999 14.9488 22.9999 15.6734 23.1666ZM24.7314 35.8332C24.5503 36.4999 24.3691 36.9999 24.188 37.6666L9.1517 23.8332C9.69518 23.6666 10.4198 23.3332 11.1445 23.3332L24.7314 35.8332ZM4.98507 26.4999L21.1083 41.3333C20.5648 41.6667 20.2025 42 19.659 42.3333L3.89811 27.8333C4.26045 27.3333 4.62273 26.9999 4.98507 26.4999ZM18.3908 43.1666C17.8474 43.5 17.1227 43.6666 16.5793 43.8333L2.62996 30.9999C2.8111 30.3332 2.9923 29.8332 3.35458 29.3332L18.3908 43.1666ZM3.17344 37.9999L8.78937 43.1666C6.25312 42 4.2604 40.1666 3.17344 37.9999ZM11.8691 44L2.26762 35.1666C2.26762 34.6666 2.08648 34.1666 2.08648 33.6666C2.08648 33.3332 2.08648 32.9999 2.08648 32.8332L14.4054 44.1666C14.043 44.1666 13.6807 44.1666 13.4995 44.1666C12.9561 44.1666 12.4126 44 11.8691 44ZM22.1952 40.3332L6.07197 25.4999C6.61545 25.1665 7.15893 24.8332 7.70241 24.4999L23.4633 38.9999C23.101 39.4999 22.7387 39.9999 22.1952 40.3332Z" fill={color} />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="50" height="50" fill="white" transform="translate(0.274902)" />
      </clipPath>
    </defs>
  </svg>
));

export default ImageFilters;
