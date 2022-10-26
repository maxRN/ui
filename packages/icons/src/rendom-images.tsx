import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const RendomImages = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', color2 = '#F8FAFB', size = 14, ...rest }, ref): JSX.Element => (
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
        d="M43.4164 5.27942H1.06762C0.533808 5.27942 0 5.83089 0 6.38237V48.2942C0 49.0294 0.533808 49.3971 1.06762 49.3971H43.4164C44.1281 49.3971 44.484 49.0294 44.484 48.2942V6.38237C44.484 5.83089 44.1281 5.27942 43.4164 5.27942ZM23.3096 40.2059C22.9537 40.5736 22.5979 40.7574 21.8861 40.7574C21.1744 40.7574 20.8185 40.5736 20.4626 40.2059C20.1068 39.8383 19.9288 39.4706 19.9288 38.9192C19.9288 38.3677 20.1068 38 20.4626 37.6324C20.8185 37.2647 21.1744 37.0809 21.8861 37.0809C22.5979 37.0809 22.9537 37.2647 23.3096 37.6324C23.6655 38 23.8434 38.3677 23.8434 38.9192C23.6655 39.2868 23.6655 39.8383 23.3096 40.2059ZM26.5125 26.9706L24.5552 28.9927C23.6655 29.9118 23.3096 31.3824 23.3096 33.2206H20.1068C20.1068 31.75 20.2847 30.6471 20.6406 29.9118C20.9964 29.1765 21.5303 28.2574 22.4199 27.1544L24.7331 24.7647C25.6228 23.6618 26.1566 22.375 26.1566 21.0882C26.1566 19.8015 25.8007 18.8824 25.2669 18.1471C24.5552 17.4118 23.6655 17.0441 22.5979 17.0441C21.3523 17.0441 20.4626 17.4118 19.7509 17.9632C19.0391 18.6985 18.6833 19.4338 18.6833 20.5368H15.3025C15.3025 18.6985 16.0142 17.0441 17.2598 15.9412C18.5053 14.8382 20.2847 14.1029 22.4199 14.1029C24.5552 14.1029 26.3345 14.6544 27.5801 15.9412C28.8256 17.2279 29.3594 18.6985 29.3594 20.9044C29.1815 22.9265 28.2918 24.9485 26.5125 26.9706Z"
        fill={color}
      />
      <path
        d="M48.5943 0H6.42349C5.71174 0 5.17794 0.367647 5.17794 1.10294V3.71949H7.19479V2.20588H47.5V38.8971H46.3247V44.1176H48.5943C49.306 44.1176 49.6619 43.75 49.6619 43.0147V1.10294C49.6619 0.367647 49.306 0 48.5943 0Z"
        fill={color}
      />
    </svg>
  )
);

export default RendomImages;
