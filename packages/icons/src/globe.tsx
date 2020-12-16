import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const Globe = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M8.21809 9.86132C10.9411 9.86132 13.1485 7.65379 13.1485 4.93066C13.1485 2.20753 10.9411 0 8.21809 0C5.4951 0 3.28767 2.20753 3.28767 4.93066C3.28767 7.65379 5.4951 9.86132 8.21809 9.86132Z" fill={color} />
    <path d="M2.71984 27.1389H3.20883V36.9187C3.20883 38.2638 4.30905 39.3637 5.65376 39.3637H10.7881C12.1328 39.3637 13.2331 38.2638 13.2331 36.9187V36.3486C12.7848 35.4925 12.4996 34.5149 12.4996 33.4962V20.7009C12.4996 18.2152 14.0073 16.0555 16.167 15.1183V14.1403C16.167 12.7956 15.0668 11.6954 13.7221 11.6954H2.71984C1.37512 11.6954 0.274902 12.7956 0.274902 14.1403V24.6944C0.274902 26.0391 1.33438 27.1389 2.71984 27.1389Z" fill={color} />
    <path d="M42.3677 9.86132C45.0908 9.86132 47.2984 7.65379 47.2984 4.93066C47.2984 2.20753 45.0908 0 42.3677 0C39.6445 0 37.437 2.20753 37.437 4.93066C37.437 7.65379 39.6445 9.86132 42.3677 9.86132Z" fill={color} />
    <path d="M34.383 14.0991V15.0771C36.5431 16.0143 38.0504 18.1741 38.0504 20.6598V33.4143C38.0504 34.433 37.8059 35.411 37.3174 36.2667V36.8372C37.3174 38.1819 38.4172 39.2822 39.7623 39.2822H44.8967C46.2414 39.2822 47.3416 38.1819 47.3416 36.8372V27.0574H47.8302C49.1753 27.0574 50.2751 25.9572 50.2751 24.6124V14.0991C50.2751 12.7544 49.1753 11.6542 47.8302 11.6542H36.828C35.4837 11.6542 34.383 12.754 34.383 14.0991Z" fill={color} />
    <path d="M16.2103 20.7004V33.4956C16.2103 34.8403 17.3105 35.9406 18.6553 35.9406H19.5925V47.4726C19.5925 48.8173 20.6927 49.9175 22.0374 49.9175H28.598C29.9427 49.9175 31.0429 48.8173 31.0429 47.4726V35.8998H31.9801C33.3248 35.8998 34.425 34.8 34.425 33.4549V20.7008C34.425 19.356 33.3248 18.2558 31.9801 18.2558H18.6553C17.2698 18.2554 16.2103 19.356 16.2103 20.7004Z" fill={color} />
    <path d="M25.2965 16.2177C28.4246 16.2177 30.9605 13.6817 30.9605 10.5535C30.9605 7.42529 28.4246 4.88937 25.2965 4.88937C22.1684 4.88937 19.6326 7.42529 19.6326 10.5535C19.6326 13.6817 22.1684 16.2177 25.2965 16.2177Z" fill={color} />
  </svg>
));

export default Globe;
