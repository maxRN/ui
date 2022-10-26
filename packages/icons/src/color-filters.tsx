import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const ColorFilters = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 50 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M41.2229 16.7653C41.3215 12.426 39.7436 8.28402 36.6864 5.02959C33.6292 1.77515 29.4872 0 25.0493 0C20.6114 0 16.3708 1.77515 13.3136 5.02959C10.2564 8.1854 8.6785 12.3274 8.77712 16.7653C3.45168 19.5266 0 25.1479 0 31.1637C0 37.2781 3.25444 42.6035 8.57988 45.4635C11.0454 46.7456 13.7081 47.4359 16.2722 47.4359C19.3294 47.4359 22.288 46.5483 24.9507 44.8718C29.9803 48.1262 36.0947 48.3235 41.4201 45.4635C46.7456 42.6035 50 37.2781 50 31.1637C50 25.0493 46.6469 19.5266 41.2229 16.7653ZM22.7811 43.0966C18.6391 45.3649 13.7081 45.3649 9.56607 42.998C5.22682 40.5325 2.66272 36.1933 2.66272 31.1637C2.66272 26.43 5.12821 22.0907 9.1716 19.6252C10.1578 24.359 13.3136 28.501 17.6529 30.6706C17.4556 35.4043 19.3294 39.8422 22.7811 43.0966ZM32.1499 27.8106C31.4596 24.5562 29.783 21.499 27.3176 19.2308C30.6706 17.357 34.8126 17.0611 38.4615 18.3432C37.7712 22.288 35.503 25.7396 32.1499 27.8106ZM20.6114 28.1065C21.3018 25.2465 22.8797 22.6824 25.0493 20.8087C27.5148 22.8797 29.1913 25.8383 29.6844 28.9941C26.7258 30.0789 23.4714 30.0789 20.4142 28.9941C20.4142 28.6982 20.5128 28.4024 20.6114 28.1065ZM25.0493 17.4556C23.57 16.4694 21.8935 15.7791 20.1183 15.3846C19.428 15.1874 18.6391 15.6805 18.5404 16.3708C18.4418 16.7653 18.5404 17.0611 18.7377 17.357C18.9349 17.6529 19.2308 17.8501 19.5266 17.9487C20.7101 18.2446 21.7949 18.6391 22.7811 19.2308C20.3156 21.499 18.6391 24.4576 17.9487 27.8106C14.5957 25.7396 12.2288 22.288 11.6371 18.3432C11.9329 18.2446 12.1302 18.146 12.426 18.0473C12.7219 17.9487 13.0178 17.7515 13.215 17.357C13.4122 17.0611 13.4122 16.6667 13.3136 16.3708C13.1164 15.6805 12.3274 15.286 11.6371 15.4832C11.5385 15.4832 11.5385 15.4832 11.4398 15.5819C11.8343 8.48126 17.7515 2.66272 25.0493 2.66272C32.3471 2.66272 38.2643 8.38264 38.6588 15.5819C34.0237 14.2012 28.9941 14.8915 25.0493 17.4556ZM29.783 31.7554C29.5858 35.503 27.9093 39.0532 25.0493 41.5187C22.1893 39.0532 20.4142 35.6016 20.3156 31.7554C23.3728 32.7416 26.7258 32.7416 29.783 31.7554ZM32.4458 30.6706C36.785 28.4024 39.8422 24.359 40.927 19.6252C44.9704 22.0907 47.4359 26.43 47.4359 31.1637C47.4359 36.0947 44.8718 40.5325 40.5325 42.998C36.3905 45.3649 31.4596 45.3649 27.3176 43.0966C30.7692 39.8422 32.643 35.4043 32.4458 30.6706Z"
        fill={color}
      />
      <path
        d="M15.5819 14.8915C14.9901 14.9901 14.497 15.5819 14.497 16.1736C14.497 16.8639 15.0888 17.5542 15.8777 17.5542C16.6667 17.5542 17.2584 16.9625 17.2584 16.1736C17.2584 15.7791 17.0611 15.3846 16.7653 15.1874C16.3708 14.9901 15.9763 14.8915 15.5819 14.8915Z"
        fill={color}
      />
    </svg>
  )
);

export default ColorFilters;
