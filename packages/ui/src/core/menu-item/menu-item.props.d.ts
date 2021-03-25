import type { PropsWithChildren } from 'react';
import type { Values } from '../../utils/types';
import { Size } from './types';

export type MenuItemSizeType = Values<typeof Size>;

export type MenuItemListType = {
  key: string;
  content: string | React.ReactNode;
  prefix?: string | React.ReactNode | undefined;
  subList?: MenuItemListType[];
  suffix?: string | React.ReactNode | undefined;
  onClick?: func | undefined;
  disabled?: boolean;
};
export interface MenuItemIconProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  size?: MenuItemSizeType;
}

export type MenuItemActionsProps = MenuItemIconProps;

export interface MenuItemProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  size?: MenuItemSizeType;
  icon?: React.ReactNode;
  active?: boolean;
  value?: string | number | null;
  list?: MenuItemListType[] | null | undefined;
  depth?: number | undefined;
}
