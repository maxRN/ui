import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Invoice = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 14, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M31.5254 0V12.5H44.0254L31.5254 0Z" fill={color} />
    <path d="M31.5254 15.625C29.8035 15.625 28.4004 14.2219 28.4004 12.5V0H9.65039C7.92852 0 6.52539 1.40313 6.52539 3.125V46.875C6.52539 48.6 7.92852 50 9.65039 50H40.9004C42.6254 50 44.0254 48.6 44.0254 46.875V15.625H31.5254ZM17.4629 9.56875V7.8125C17.4629 6.95 18.1629 6.25 19.0254 6.25C19.8879 6.25 20.5879 6.95 20.5879 7.8125V9.57187C21.566 9.79375 22.4785 10.2062 23.2316 10.8187C23.9035 11.3625 24.0035 12.3469 23.4566 13.0156C22.9098 13.6875 21.9254 13.7844 21.2598 13.2406C20.6691 12.7625 19.8754 12.5 19.0254 12.5C17.3316 12.5 15.9004 13.5719 15.9004 14.8438C15.9004 16.1156 17.3316 17.1875 19.0254 17.1875C22.4723 17.1875 25.2754 19.6406 25.2754 22.6562C25.2754 25.1969 23.2754 27.3188 20.5879 27.9312V29.6875C20.5879 30.55 19.8879 31.25 19.0254 31.25C18.1629 31.25 17.4629 30.55 17.4629 29.6875V27.9281C16.4848 27.7063 15.5723 27.2937 14.8191 26.6812C14.1473 26.1344 14.0473 25.15 14.5941 24.4813C15.141 23.8063 16.1223 23.7125 16.791 24.2563C17.3816 24.7375 18.1754 25 19.0254 25C20.7191 25 22.1504 23.9281 22.1504 22.6562C22.1504 21.3844 20.7191 20.3125 19.0254 20.3125C15.5785 20.3125 12.7754 17.8594 12.7754 14.8438C12.7754 12.3031 14.7754 10.1813 17.4629 9.56875ZM36.2129 43.75H14.3379C13.4754 43.75 12.7754 43.05 12.7754 42.1875C12.7754 41.325 13.4754 40.625 14.3379 40.625H36.2129C37.0754 40.625 37.7754 41.325 37.7754 42.1875C37.7754 43.05 37.0754 43.75 36.2129 43.75ZM36.2129 37.5H14.3379C13.4754 37.5 12.7754 36.8 12.7754 35.9375C12.7754 35.075 13.4754 34.375 14.3379 34.375H36.2129C37.0754 34.375 37.7754 35.075 37.7754 35.9375C37.7754 36.8 37.0754 37.5 36.2129 37.5ZM36.2129 31.25H29.9629C29.1004 31.25 28.4004 30.55 28.4004 29.6875C28.4004 28.825 29.1004 28.125 29.9629 28.125H36.2129C37.0754 28.125 37.7754 28.825 37.7754 29.6875C37.7754 30.55 37.0754 31.25 36.2129 31.25ZM36.2129 25H29.9629C29.1004 25 28.4004 24.3 28.4004 23.4375C28.4004 22.575 29.1004 21.875 29.9629 21.875H36.2129C37.0754 21.875 37.7754 22.5719 37.7754 23.4375C37.7754 24.3 37.0754 25 36.2129 25Z" fill={color} />
  </svg>
));

export default Invoice;
