import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const ApprovalNotification = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 59 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle cx="11.3989" cy="11.5631" r="10.9375" fill="#26C17A" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.025 24.9646C11.1455 25.4798 10.4819 26.3016 10.1654 27.275C9.82351 28.3262 9.91421 29.4727 10.4165 30.4564L12.5723 34.6913C12.6723 34.8867 12.6723 35.1146 12.5723 35.3099L10.4165 39.5448C9.91421 40.5285 9.82351 41.675 10.1654 42.7262C10.5072 43.7774 11.2537 44.6518 12.2398 45.1541L16.4723 47.3099C16.6677 47.4099 16.8026 47.596 16.8375 47.8122L17.5793 52.5053C17.7537 53.596 18.3537 54.575 19.2468 55.2262C20.1421 55.875 21.2584 56.1448 22.3514 55.9704L27.0444 55.2285C27.2607 55.1936 27.4793 55.2657 27.6328 55.4192L30.9933 58.7797C31.7747 59.5611 32.8351 60.0006 33.9421 60.0006C35.0491 60.0006 36.1096 59.5611 36.891 58.7797L40.2514 55.4192C40.4049 55.2657 40.6235 55.1936 40.8398 55.2285L45.5328 55.9704C46.6258 56.1448 47.7421 55.875 48.6375 55.2262C49.5305 54.575 50.1305 53.596 50.3049 52.5053L51.0468 47.8122C51.0816 47.596 51.2165 47.4099 51.4119 47.3099L55.6444 45.1541C56.6305 44.6518 57.377 43.7774 57.7189 42.7262C58.0607 41.675 57.97 40.5285 57.4677 39.5448L55.3119 35.3099C55.2119 35.1146 55.2119 34.8867 55.3119 34.6913L57.4677 30.4564C57.97 29.4727 58.0607 28.3262 57.7189 27.275C57.377 26.2239 56.6305 25.3494 55.6444 24.8471L51.4119 22.6913C51.2165 22.5913 51.0816 22.4053 51.0468 22.189L50.3049 17.496C50.1305 16.4053 49.5305 15.4262 48.6375 14.775C47.7421 14.1262 46.6258 13.8564 45.5328 14.0308L40.8398 14.7727C40.6235 14.8076 40.4049 14.7355 40.2514 14.582L36.891 11.2215C36.1096 10.4401 35.0491 10.0006 33.9421 10.0006C32.8351 10.0006 31.7747 10.4401 30.9933 11.2215L27.6328 14.582C27.4793 14.7355 27.2607 14.8076 27.0444 14.7727L24.8772 14.4301C24.1705 20.3837 19.1051 25.0006 12.9614 25.0006C12.6463 25.0006 12.334 24.9885 12.025 24.9646ZM24.5701 36.233C23.8887 35.5539 23.8887 34.447 24.5701 33.7679C25.2492 33.0865 26.3562 33.0865 27.0352 33.7679L31.2283 37.9609L40.8492 28.34C41.5283 27.6609 42.6352 27.6609 43.3143 28.34C43.9957 29.0214 43.9957 30.126 43.3143 30.8074L32.4632 41.6609C31.7818 42.3423 30.6771 42.3423 29.9957 41.6609L24.5701 36.233Z"
        fill={color}
      />
    </svg>
  )
);

export default ApprovalNotification;
