import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

// $light/txt-secondary color: #768184;
export const FilerobotLabel = intrinsicComponent<IconProps, SVGSVGElement>((
  {
    color = '#F8FAFB', stroke = '#DFE7ED', color2 = 'currentColor', size = 20, ...rest
  },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size * 6.2}
    height={size}
    viewBox="0 0 124 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M21.1805 1.00006C3.79389 2.33862 2.7554 18.5288 1 18.8475H123V1L21.1805 1.00006Z" fill={color} stroke={stroke} />
    <path d="M24.1465 10.417C24.1465 11.221 23.9626 11.8688 23.5947 12.3604C23.2269 12.8519 22.7288 13.0977 22.1006 13.0977C21.4593 13.0977 20.9548 12.8942 20.5869 12.4873V15.0312H19.6836V7.7168H20.5088L20.5527 8.30273C20.9206 7.84701 21.4316 7.61914 22.0859 7.61914C22.7207 7.61914 23.222 7.8584 23.5898 8.33691C23.9609 8.81543 24.1465 9.48112 24.1465 10.334V10.417ZM23.2432 10.3145C23.2432 9.71875 23.1162 9.24837 22.8623 8.90332C22.6084 8.55827 22.2601 8.38574 21.8174 8.38574C21.2705 8.38574 20.8604 8.62826 20.5869 9.11328V11.6377C20.8571 12.1195 21.2705 12.3604 21.8271 12.3604C22.2601 12.3604 22.6035 12.1895 22.8574 11.8477C23.1146 11.5026 23.2432 10.9915 23.2432 10.3145ZM25.0596 10.3096C25.0596 9.79199 25.1605 9.3265 25.3623 8.91309C25.5674 8.49967 25.8506 8.18066 26.2119 7.95605C26.5765 7.73145 26.9915 7.61914 27.457 7.61914C28.1764 7.61914 28.7575 7.86816 29.2002 8.36621C29.6462 8.86426 29.8691 9.52669 29.8691 10.3535V10.417C29.8691 10.9313 29.7699 11.3936 29.5713 11.8037C29.376 12.2106 29.0944 12.528 28.7266 12.7559C28.362 12.9837 27.9421 13.0977 27.4668 13.0977C26.7507 13.0977 26.1696 12.8486 25.7236 12.3506C25.2809 11.8525 25.0596 11.1934 25.0596 10.373V10.3096ZM25.9678 10.417C25.9678 11.0029 26.1029 11.4733 26.373 11.8281C26.6465 12.1829 27.0111 12.3604 27.4668 12.3604C27.9258 12.3604 28.2904 12.1813 28.5605 11.8232C28.8307 11.4619 28.9658 10.9574 28.9658 10.3096C28.9658 9.73014 28.8275 9.26139 28.5508 8.90332C28.2773 8.54199 27.9128 8.36133 27.457 8.36133C27.0111 8.36133 26.6514 8.53874 26.3779 8.89355C26.1045 9.24837 25.9678 9.75618 25.9678 10.417ZM35.6797 11.7549L36.6953 7.7168H37.5986L36.0605 13H35.3281L34.0439 8.99609L32.7939 13H32.0615L30.5283 7.7168H31.4268L32.4668 11.6719L33.6973 7.7168H34.4248L35.6797 11.7549ZM40.7139 13.0977C39.9977 13.0977 39.415 12.8633 38.9658 12.3945C38.5166 11.9225 38.292 11.2926 38.292 10.5049V10.3389C38.292 9.81478 38.3913 9.34766 38.5898 8.9375C38.7917 8.52409 39.0716 8.20182 39.4297 7.9707C39.791 7.73633 40.1816 7.61914 40.6016 7.61914C41.2884 7.61914 41.8223 7.84538 42.2031 8.29785C42.584 8.75033 42.7744 9.39811 42.7744 10.2412V10.6172H39.1953C39.2083 11.138 39.3597 11.5596 39.6494 11.8818C39.9424 12.2008 40.3135 12.3604 40.7627 12.3604C41.0817 12.3604 41.3519 12.2952 41.5732 12.165C41.7946 12.0348 41.9883 11.8623 42.1543 11.6475L42.7061 12.0771C42.2633 12.7575 41.5993 13.0977 40.7139 13.0977ZM40.6016 8.36133C40.237 8.36133 39.931 8.49479 39.6836 8.76172C39.4362 9.02539 39.2832 9.39648 39.2246 9.875H41.8711V9.80664C41.8451 9.34766 41.7214 8.99284 41.5 8.74219C41.2786 8.48828 40.9792 8.36133 40.6016 8.36133ZM46.3779 8.52734C46.2412 8.50456 46.0931 8.49316 45.9336 8.49316C45.3411 8.49316 44.9391 8.74544 44.7275 9.25V13H43.8242V7.7168H44.7031L44.7178 8.32715C45.014 7.85514 45.4339 7.61914 45.9775 7.61914C46.1533 7.61914 46.2868 7.64193 46.3779 7.6875V8.52734ZM49.3076 13.0977C48.5915 13.0977 48.0088 12.8633 47.5596 12.3945C47.1104 11.9225 46.8857 11.2926 46.8857 10.5049V10.3389C46.8857 9.81478 46.985 9.34766 47.1836 8.9375C47.3854 8.52409 47.6654 8.20182 48.0234 7.9707C48.3848 7.73633 48.7754 7.61914 49.1953 7.61914C49.8822 7.61914 50.416 7.84538 50.7969 8.29785C51.1777 8.75033 51.3682 9.39811 51.3682 10.2412V10.6172H47.7891C47.8021 11.138 47.9535 11.5596 48.2432 11.8818C48.5361 12.2008 48.9072 12.3604 49.3564 12.3604C49.6755 12.3604 49.9456 12.2952 50.167 12.165C50.3883 12.0348 50.582 11.8623 50.748 11.6475L51.2998 12.0771C50.8571 12.7575 50.193 13.0977 49.3076 13.0977ZM49.1953 8.36133C48.8307 8.36133 48.5247 8.49479 48.2773 8.76172C48.0299 9.02539 47.877 9.39648 47.8184 9.875H50.4648V9.80664C50.4388 9.34766 50.3151 8.99284 50.0938 8.74219C49.8724 8.48828 49.5729 8.36133 49.1953 8.36133ZM52.1982 10.3145C52.1982 9.50391 52.3903 8.85286 52.7744 8.36133C53.1585 7.86654 53.6615 7.61914 54.2832 7.61914C54.9017 7.61914 55.3916 7.83073 55.7529 8.25391V5.5H56.6562V13H55.8262L55.7822 12.4336C55.4209 12.8763 54.918 13.0977 54.2734 13.0977C53.6615 13.0977 53.1618 12.847 52.7744 12.3457C52.3903 11.8444 52.1982 11.1901 52.1982 10.3828V10.3145ZM53.1016 10.417C53.1016 11.016 53.2253 11.4847 53.4727 11.8232C53.7201 12.1618 54.0618 12.3311 54.498 12.3311C55.071 12.3311 55.4893 12.0739 55.7529 11.5596V9.13281C55.4827 8.63477 55.0677 8.38574 54.5078 8.38574C54.0651 8.38574 53.7201 8.55664 53.4727 8.89844C53.2253 9.24023 53.1016 9.74642 53.1016 10.417ZM65.0156 10.417C65.0156 11.2243 64.8301 11.8737 64.459 12.3652C64.0879 12.8535 63.5898 13.0977 62.9648 13.0977C62.2975 13.0977 61.7816 12.8617 61.417 12.3896L61.373 13H60.543V5.5H61.4463V8.29785C61.8109 7.84538 62.3138 7.61914 62.9551 7.61914C63.5964 7.61914 64.0993 7.86165 64.4639 8.34668C64.8317 8.83171 65.0156 9.49577 65.0156 10.3389V10.417ZM64.1123 10.3145C64.1123 9.69922 63.9935 9.22396 63.7559 8.88867C63.5182 8.55339 63.1764 8.38574 62.7305 8.38574C62.1348 8.38574 61.7067 8.66243 61.4463 9.21582V11.501C61.723 12.0544 62.1543 12.3311 62.7402 12.3311C63.1732 12.3311 63.5101 12.1634 63.751 11.8281C63.9919 11.4928 64.1123 10.9883 64.1123 10.3145ZM67.8281 11.6768L69.0586 7.7168H70.0254L67.9014 13.8154C67.5726 14.6943 67.0501 15.1338 66.334 15.1338L66.1631 15.1191L65.8262 15.0557V14.3232L66.0703 14.3428C66.3763 14.3428 66.6139 14.2809 66.7832 14.1572C66.9557 14.0335 67.0973 13.8073 67.208 13.4785L67.4082 12.9414L65.5234 7.7168H66.5098L67.8281 11.6768ZM77.5449 10.0947H74.7324V13H73.2676V5.89062H77.8965V7.07715H74.7324V8.91309H77.5449V10.0947ZM80.1426 13H78.7266V7.7168H80.1426V13ZM78.6436 6.34961C78.6436 6.13802 78.7135 5.96387 78.8535 5.82715C78.9967 5.69043 79.1904 5.62207 79.4346 5.62207C79.6755 5.62207 79.8675 5.69043 80.0107 5.82715C80.154 5.96387 80.2256 6.13802 80.2256 6.34961C80.2256 6.56445 80.1523 6.74023 80.0059 6.87695C79.8626 7.01367 79.6722 7.08203 79.4346 7.08203C79.1969 7.08203 79.0049 7.01367 78.8584 6.87695C78.7152 6.74023 78.6436 6.56445 78.6436 6.34961ZM82.7988 13H81.3828V5.5H82.7988V13ZM86.3975 13.0977C85.6227 13.0977 84.9912 12.86 84.5029 12.3848C84.0179 11.9095 83.7754 11.2764 83.7754 10.4854V10.3486C83.7754 9.81803 83.8779 9.3444 84.083 8.92773C84.2881 8.50781 84.5778 8.18555 84.9521 7.96094C85.3298 7.73307 85.7594 7.61914 86.2412 7.61914C86.9639 7.61914 87.5319 7.84701 87.9453 8.30273C88.362 8.75846 88.5703 9.40462 88.5703 10.2412V10.8174H85.2061C85.2516 11.1624 85.3883 11.4391 85.6162 11.6475C85.8473 11.8558 86.1387 11.96 86.4902 11.96C87.0339 11.96 87.4587 11.763 87.7646 11.3691L88.458 12.1455C88.2464 12.445 87.96 12.6794 87.5986 12.8486C87.2373 13.0146 86.8369 13.0977 86.3975 13.0977ZM86.2363 8.76172C85.9564 8.76172 85.7285 8.85612 85.5527 9.04492C85.3802 9.23372 85.2695 9.50391 85.2207 9.85547H87.1836V9.74316C87.1771 9.43066 87.0924 9.18978 86.9297 9.02051C86.7669 8.84798 86.5358 8.76172 86.2363 8.76172ZM92.3447 9.04004C92.1527 9.014 91.9834 9.00098 91.8369 9.00098C91.3031 9.00098 90.9531 9.18164 90.7871 9.54297V13H89.376V7.7168H90.709L90.748 8.34668C91.0312 7.86165 91.4235 7.61914 91.9248 7.61914C92.0811 7.61914 92.2275 7.6403 92.3643 7.68262L92.3447 9.04004ZM92.6328 10.3096C92.6328 9.78548 92.7337 9.31836 92.9355 8.9082C93.1374 8.49805 93.4271 8.18066 93.8047 7.95605C94.1855 7.73145 94.6266 7.61914 95.1279 7.61914C95.8408 7.61914 96.4219 7.83724 96.8711 8.27344C97.3236 8.70964 97.5758 9.30208 97.6279 10.0508L97.6377 10.4121C97.6377 11.2227 97.4115 11.8737 96.959 12.3652C96.5065 12.8535 95.8994 13.0977 95.1377 13.0977C94.376 13.0977 93.7673 12.8535 93.3115 12.3652C92.859 11.877 92.6328 11.2129 92.6328 10.373V10.3096ZM94.0439 10.4121C94.0439 10.9134 94.1383 11.2975 94.3271 11.5645C94.516 11.8281 94.7861 11.96 95.1377 11.96C95.4795 11.96 95.7464 11.8298 95.9385 11.5693C96.1305 11.3057 96.2266 10.8857 96.2266 10.3096C96.2266 9.81803 96.1305 9.43717 95.9385 9.16699C95.7464 8.89681 95.4762 8.76172 95.1279 8.76172C94.7829 8.76172 94.516 8.89681 94.3271 9.16699C94.1383 9.43392 94.0439 9.84896 94.0439 10.4121ZM103.268 10.4072C103.268 11.2536 103.087 11.9144 102.726 12.3896C102.364 12.8617 101.86 13.0977 101.212 13.0977C100.639 13.0977 100.182 12.8779 99.8398 12.4385L99.7764 13H98.5068V5.5H99.918V8.19043C100.243 7.80957 100.672 7.61914 101.202 7.61914C101.847 7.61914 102.351 7.85677 102.716 8.33203C103.084 8.80404 103.268 9.46973 103.268 10.3291V10.4072ZM101.856 10.3047C101.856 9.77083 101.772 9.38184 101.603 9.1377C101.433 8.8903 101.181 8.7666 100.846 8.7666C100.396 8.7666 100.087 8.95052 99.918 9.31836V11.4033C100.09 11.7744 100.403 11.96 100.855 11.96C101.311 11.96 101.611 11.7354 101.754 11.2861C101.822 11.0713 101.856 10.7441 101.856 10.3047ZM103.922 10.3096C103.922 9.78548 104.023 9.31836 104.225 8.9082C104.426 8.49805 104.716 8.18066 105.094 7.95605C105.475 7.73145 105.916 7.61914 106.417 7.61914C107.13 7.61914 107.711 7.83724 108.16 8.27344C108.613 8.70964 108.865 9.30208 108.917 10.0508L108.927 10.4121C108.927 11.2227 108.701 11.8737 108.248 12.3652C107.796 12.8535 107.188 13.0977 106.427 13.0977C105.665 13.0977 105.056 12.8535 104.601 12.3652C104.148 11.877 103.922 11.2129 103.922 10.373V10.3096ZM105.333 10.4121C105.333 10.9134 105.427 11.2975 105.616 11.5645C105.805 11.8281 106.075 11.96 106.427 11.96C106.769 11.96 107.035 11.8298 107.228 11.5693C107.42 11.3057 107.516 10.8857 107.516 10.3096C107.516 9.81803 107.42 9.43717 107.228 9.16699C107.035 8.89681 106.765 8.76172 106.417 8.76172C106.072 8.76172 105.805 8.89681 105.616 9.16699C105.427 9.43392 105.333 9.84896 105.333 10.4121ZM111.485 6.41797V7.7168H112.389V8.75195H111.485V11.3887C111.485 11.584 111.523 11.724 111.598 11.8086C111.673 11.8932 111.816 11.9355 112.027 11.9355C112.184 11.9355 112.322 11.9242 112.442 11.9014V12.9707C112.166 13.0553 111.881 13.0977 111.588 13.0977C110.598 13.0977 110.094 12.598 110.074 11.5986V8.75195H109.303V7.7168H110.074V6.41797H111.485Z" fill={color2} />
  </svg>
));

export default FilerobotLabel;
