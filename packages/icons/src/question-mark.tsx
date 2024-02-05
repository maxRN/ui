import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const QuestionMark = intrinsicComponent<IconProps, SVGSVGElement>(
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
      <path
        d="M24.9459 50C11.1232 50 0.000244141 38.8528 0.000244141 25C0.000244141 11.1472 11.1232 0 24.9459 0C38.7685 0 49.8915 11.039 49.9995 24.8918C50.1074 38.4199 39.0925 50 24.9459 50ZM24.8379 31.9264C25.4858 31.9264 26.1338 31.9264 26.7817 31.9264C27.4296 31.9264 27.6456 31.71 27.7536 30.9524C27.7536 30.1948 27.8616 29.5455 27.7536 28.7879C27.6456 27.4892 28.2935 26.6234 29.1574 25.8658C30.3453 24.7836 31.6412 23.7013 32.7211 22.6191C34.017 21.3203 34.5569 19.8052 34.5569 18.0736C34.4489 15.368 33.1531 13.4199 30.8853 12.013C27.4296 9.84848 23.65 9.84849 19.9783 11.5801C17.3866 12.7706 15.7667 15.0433 15.4428 17.9654C15.3348 18.7229 15.5508 18.9394 16.3067 19.0476C17.4946 19.1558 18.6824 19.3723 19.8703 19.4805C20.8422 19.5888 20.9502 19.4805 21.1662 18.6147C21.8142 16.0173 24.0819 14.7186 26.5657 15.5844C28.7255 16.2338 29.2654 18.6147 27.6456 19.9134C26.4577 20.8874 25.3778 21.8615 24.2979 22.9437C23.434 23.8095 22.5701 24.6753 22.4621 25.974C22.2461 27.7056 22.1381 29.4372 22.0301 31.1688C22.0301 31.71 22.3541 32.0346 22.8941 32.0346C23.542 31.9264 24.1899 31.9264 24.8379 31.9264ZM24.9459 33.658C23.326 33.658 22.0301 34.9567 22.0301 36.5801C22.0301 38.2035 23.326 39.5022 24.9459 39.5022C26.5657 39.5022 27.8616 38.2035 27.8616 36.5801C27.8616 34.9567 26.5657 33.658 24.9459 33.658Z"
        fill={color}
      />
    </svg>
  )
);

export default QuestionMark;
