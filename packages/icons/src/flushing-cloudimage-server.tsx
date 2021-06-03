import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const FlushingCloudimageServer = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <g clipPath="url(#clip0)">
        <path
          d="M29.9925 0.000549316L45 15.0005L45.0025 25.6506C42.5431 23.6093 39.4461 22.4947 36.25 22.5005L35.6975 22.5105C32.7086 22.6311 29.8405 23.7226 27.5276 25.6195C25.2147 27.5165 23.5831 30.1156 22.88 33.023L22.84 33.208L22.765 33.258C21.4468 34.1414 20.3191 35.2799 19.4483 36.6064C18.5776 37.9329 17.9815 39.4204 17.6953 40.9812C17.4091 42.5419 17.4387 44.1442 17.7821 45.6933C18.1256 47.2424 18.776 48.707 19.695 50.0005H2.4825C1.87479 50.0005 1.2882 49.7775 0.833892 49.3739C0.379581 48.9703 0.0891035 48.414 0.0174999 47.8106L0 47.5205V2.48055C0 1.23555 0.9675 0.163049 2.2125 0.0180492L2.505 0.000549316H29.9925ZM36.25 27.5005C38.5706 27.5005 40.7962 28.4224 42.4372 30.0634C44.0781 31.7043 45 33.9299 45 36.2505L44.9975 36.508C46.5615 36.9487 47.9188 37.9291 48.8288 39.2753C49.7388 40.6214 50.1425 42.2464 49.9685 43.8619C49.7944 45.4775 49.0537 46.9791 47.8779 48.1006C46.702 49.222 45.167 49.8907 43.545 49.9881L43.125 50.0005H29.375L28.955 49.9881C27.3334 49.8897 25.799 49.2203 24.6238 48.0985C23.4487 46.9767 22.7088 45.475 22.5354 43.8597C22.3619 42.2444 22.7661 40.6198 23.6763 39.2741C24.5864 37.9284 25.9437 36.9484 27.5075 36.508L27.5 36.2505C27.5 33.9299 28.4219 31.7043 30.0628 30.0634C31.7038 28.4224 33.9294 27.5005 36.25 27.5005Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="50" height="50" fill="white" transform="translate(0 0.000549316)" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default FlushingCloudimageServer;
