import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const CropCustom = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.5625 0.562988H3.6875V2.90674H2.90625V3.68799H0.5625V0.562988ZM0.5625 44.313V47.438H3.6875V45.0942H2.90625V44.313H0.5625ZM44.3125 47.438H47.4375V44.313H45.0938V45.0942H44.3125V47.438ZM47.4375 3.68799V0.562988H44.3125V2.90674H45.0938V3.68799H47.4375ZM7.59375 0.562988V3.68799H12.2812V0.562988H7.59375ZM16.9688 0.562988V3.68799H21.6562V0.562988H16.9688ZM26.3438 0.562988V3.68799H31.0312V0.562988H26.3438ZM35.7188 0.562988V3.68799H40.4062V0.562988H35.7188ZM47.4375 7.59424H44.3125V12.2817H47.4375V7.59424ZM47.4375 16.9692H44.3125V21.6567H47.4375V16.9692ZM47.4375 26.3442H44.3125V31.0317H47.4375V26.3442ZM47.4375 35.7192H44.3125V40.4067H47.4375V35.7192ZM40.4062 47.438V44.313H35.7188V47.438H40.4062ZM31.0312 47.438V44.313H26.3438V47.438H31.0312ZM21.6562 47.438V44.313H16.9688V47.438H21.6562ZM12.2812 47.438V44.313H7.59375V47.438H12.2812ZM0.5625 40.4067H3.6875V35.7192H0.5625V40.4067ZM0.5625 31.0317H3.6875V26.3442H0.5625V31.0317ZM0.5625 21.6567H3.6875V16.9692H0.5625V21.6567ZM0.5625 12.2817H3.6875V7.59424H0.5625V12.2817Z"
        fill={color}
      />
    </svg>
  )
);

export default CropCustom;
