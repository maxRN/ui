import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const QuestionMarkOutline = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M25.2751 3C37.3751 3 47.2751 12.9 47.2751 25C47.2751 37.1 37.3751 47 25.2751 47C13.1751 47 3.27515 37.1 3.27515 25C3.27515 12.9 13.1751 3 25.2751 3ZM25.2751 0C11.4751 0 0.275146 11.2 0.275146 25C0.275146 38.8 11.4751 50 25.2751 50C39.0751 50 50.2751 38.8 50.2751 25C50.2751 11.2 39.0751 0 25.2751 0Z" fill={color} />
    <path d="M22.5751 30.8C22.5751 29.1 22.7751 27.8 23.1751 26.8C23.5751 25.8 24.3751 24.7 25.6751 23.5C26.8751 22.3 27.6751 21.4 28.0751 20.9C28.5751 20.1 28.8751 19.3 28.8751 18.4C28.8751 17.2 28.5751 16.3 27.9751 15.7C27.3751 15.1 26.4751 14.8 25.3751 14.8C24.2751 14.8 23.3751 15.1 22.7751 15.7C22.0751 16.3 21.7751 17.1 21.7751 18.2H17.1751C17.1751 15.9 17.9751 14.2 19.4751 12.9C20.9751 11.6 22.9751 10.9 25.4751 10.9C28.0751 10.9 29.9751 11.5 31.4751 12.8C32.8751 14.1 33.5751 15.9 33.5751 18.2C33.5751 20.3 32.5751 22.3 30.6751 24.3L28.2751 26.6C27.4751 27.6 26.9751 28.9 26.9751 30.8H22.5751ZM22.2751 36.7C22.2751 36 22.4751 35.3 22.9751 34.9C23.4751 34.5 24.0751 34.2 24.8751 34.2C25.6751 34.2 26.3751 34.4 26.7751 34.9C27.1751 35.4 27.4751 36 27.4751 36.7C27.4751 37.4 27.2751 38 26.7751 38.4C26.2751 38.9 25.6751 39.1 24.8751 39.1C24.0751 39.1 23.3751 38.9 22.9751 38.4C22.4751 38 22.2751 37.4 22.2751 36.7Z" fill={color} />
  </svg>
));

export default QuestionMarkOutline;
