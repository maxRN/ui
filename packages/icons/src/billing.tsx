import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Billing = intrinsicComponent<IconProps, SVGSVGElement>((
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
      <path d="M22.1504 15.4985V12.3735H3.40039C1.67852 12.3735 0.275391 13.7767 0.275391 15.4985V21.7485H22.8098C22.3754 19.8392 22.1504 17.7829 22.1504 15.4985Z" fill={color} />
      <path d="M50.1473 27.9985C48.016 31.2829 44.766 34.0767 40.1098 36.7517C39.3941 37.161 38.5879 37.3735 37.7754 37.3735C36.9629 37.3735 36.1566 37.161 35.4504 36.7579C30.7941 34.0767 27.5441 31.2798 25.4098 27.9985H0.275391V43.6235C0.275391 45.3485 1.67852 46.7485 3.40039 46.7485H47.1504C48.8754 46.7485 50.2754 45.3485 50.2754 43.6235V27.9985H50.1473ZM14.3379 37.3735H8.08789C7.22539 37.3735 6.52539 36.6735 6.52539 35.811C6.52539 34.9485 7.22539 34.2485 8.08789 34.2485H14.3379C15.2004 34.2485 15.9004 34.9485 15.9004 35.811C15.9004 36.6735 15.2004 37.3735 14.3379 37.3735Z" fill={color} />
      <path d="M49.3285 7.81406L38.391 3.12656C37.9941 2.95781 37.5535 2.95781 37.1566 3.12656L26.2191 7.81406C25.6473 8.05781 25.2754 8.62344 25.2754 9.24844V15.4984C25.2754 24.0953 28.4535 29.1203 36.9973 34.0422C37.2379 34.1797 37.5066 34.2484 37.7754 34.2484C38.0441 34.2484 38.3129 34.1797 38.5535 34.0422C47.0973 29.1328 50.2754 24.1078 50.2754 15.4984V9.24844C50.2754 8.62344 49.9035 8.05781 49.3285 7.81406ZM43.6848 14.9141L37.4348 22.7266C37.1348 23.0953 36.6848 23.3109 36.2129 23.3109C36.191 23.3109 36.166 23.3109 36.1473 23.3109C35.6504 23.2891 35.191 23.0328 34.9129 22.6172L31.7879 17.9297C31.3098 17.2109 31.5035 16.2422 32.2223 15.7641C32.9348 15.2891 33.9066 15.4766 34.3879 16.1984L36.3285 19.1078L41.241 12.9641C41.7816 12.2922 42.766 12.1859 43.4379 12.7203C44.1129 13.2547 44.2191 14.2391 43.6848 14.9141Z" fill={color} />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="50" height="50" fill="white" transform="translate(0.275391)" />
      </clipPath>
    </defs>
  </svg>
));

export default Billing;
