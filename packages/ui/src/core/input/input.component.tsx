import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { InputProps, InputSizeType } from './input.props';
import { Size } from './types';
import Styled from './input.styles';

const getIconSize = (sizeName: InputSizeType | undefined): number => {
  switch (sizeName) {
    case Size.Md:
      return 16;

    case Size.Sm:
    default:
      return 14;
  }
};

const Input = intrinsicComponent<InputProps, HTMLDivElement>(
  (
    { children, iconStart, iconEnd, size, className, style, fullWidth, readOnly, ...rest }: InputProps,
    ref
  ): JSX.Element => {
    const renderIcon = (_icon: React.ReactNode): JSX.Element | undefined =>
      _icon ? (
        <Styled.Icon>{typeof _icon === 'function' ? _icon({ size: getIconSize(size) }) : _icon}</Styled.Icon>
      ) : undefined;

    return (
      <Styled.Input ref={ref} size={size} className={className} style={style} fullWidth={Boolean(fullWidth)}>
        {renderIcon(iconStart)}
        <Styled.Base {...rest} readOnly={Boolean(readOnly)} />
        {renderIcon(iconEnd)}
      </Styled.Input>
    );
  }
);

export const defaultProps = {
  size: Size.Md,
  error: false,
  fullWidth: false,
  readOnly: false,
};

Input.defaultProps = defaultProps;

export const propTypes = {
  size: PT.oneOf(objectValues(Size)),
  iconStart: PT.oneOfType([PT.node, PT.func]),
  iconEnd: PT.oneOfType([PT.node, PT.func]),
  error: PT.bool,
  fullWidth: PT.bool,
  value: PT.string,
  readOnly: PT.bool,
};

Input.propTypes = propTypes;

export default Input;
