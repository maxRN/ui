import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const ViewOptions = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path fillRule="evenodd" clipRule="evenodd" d="M19.7189 0H2.35794C1.14267 0 0.274658 0.868047 0.274658 2.08331V19.4443C0.274658 20.6595 1.31628 21.5276 2.35794 21.5276H19.7189C20.9341 21.5276 21.8022 20.4859 21.8022 19.4443V2.08331C21.8022 0.868047 20.7605 0 19.7189 0ZM48.1914 0H30.8305C29.6152 0 28.7472 0.868047 28.7472 2.08331V19.4443C28.7472 20.6595 29.7888 21.5276 30.8305 21.5276H48.1914C49.4067 21.5276 50.2747 20.4859 50.2747 19.4443V2.08331C50.2747 0.868047 49.2331 0 48.1914 0ZM2.35794 28.1248H19.7189C20.7605 28.1248 21.8022 28.9928 21.8022 30.2081V47.569C21.8022 48.6107 20.9341 49.6523 19.7189 49.6523H2.35794C1.31628 49.6523 0.274658 48.7843 0.274658 47.569V30.2081C0.274658 28.9928 1.14267 28.1248 2.35794 28.1248ZM48.1914 28.1248H30.8305C29.6152 28.1248 28.7472 28.9928 28.7472 30.2081V47.569C28.7472 48.7843 29.7888 49.6523 30.8305 49.6523H48.1914C49.4067 49.6523 50.2747 48.6107 50.2747 47.569V30.2081C50.2747 28.9928 49.2331 28.1248 48.1914 28.1248Z" fill={color} />
  </svg>
));

export default ViewOptions;
