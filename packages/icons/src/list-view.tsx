import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const ListView = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M1.31632 5H10.2747C10.8997 5 11.3163 5.41667 11.3163 6.04167V15C11.3163 15.625 10.8997 16.0417 10.2747 16.0417H1.31632C0.691325 16.0417 0.274658 15.625 0.274658 15V6.04167C0.274658 5.41667 0.795492 5 1.31632 5Z" fill={color} />
    <path d="M15.8997 5H49.233C49.858 5 50.2747 5.41667 50.2747 6.04167V15C50.2747 15.625 49.858 16.0417 49.233 16.0417H15.8997C15.2747 16.0417 14.858 15.625 14.858 15V6.04167C14.858 5.41667 15.3788 5 15.8997 5Z" fill={color} />
    <path d="M1.31632 19.3751H10.2747C10.8997 19.3751 11.3163 19.7917 11.3163 20.4167V29.3751C11.3163 30.0001 10.8997 30.4167 10.2747 30.4167H1.31632C0.691325 30.4167 0.274658 30.0001 0.274658 29.3751V20.4167C0.274658 19.7917 0.795492 19.3751 1.31632 19.3751Z" fill={color} />
    <path d="M15.8997 19.3751H49.233C49.858 19.3751 50.2747 19.7917 50.2747 20.4167V29.3751C50.2747 30.0001 49.858 30.4167 49.233 30.4167H15.8997C15.2747 30.4167 14.858 30.0001 14.858 29.3751V20.4167C14.858 19.7917 15.3788 19.3751 15.8997 19.3751Z" fill={color} />
    <path d="M1.31632 33.6458H10.2747C10.8997 33.6458 11.3163 34.0625 11.3163 34.6875V43.6458C11.3163 44.2708 10.8997 44.6875 10.2747 44.6875H1.31632C0.691325 44.6875 0.274658 44.2708 0.274658 43.6458V34.6875C0.274658 34.1667 0.795492 33.6458 1.31632 33.6458Z" fill={color} />
    <path d="M15.8997 33.6458H49.233C49.858 33.6458 50.2747 34.0625 50.2747 34.6875V43.6458C50.2747 44.2708 49.858 44.6875 49.233 44.6875H15.8997C15.2747 44.6875 14.858 44.2708 14.858 43.6458V34.6875C14.858 34.1667 15.3788 33.6458 15.8997 33.6458Z" fill={color} />
  </svg>
));

export default ListView;
