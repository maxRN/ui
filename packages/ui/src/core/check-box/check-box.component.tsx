import React from 'react';
import PT from 'prop-types';
import Tick from '@scaleflex/icons/tick';
import { lightPalette } from '@scaleflex/ui/theme/roots/palette';
import { Color } from '@scaleflex/ui/utils/types/palette';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { CheckBoxProps } from './check-box.props';
import Styled from './check-box.styles';
import { Size } from './size';
import { getCheckboxIconSize } from './check-box.utils';

const CheckBox = intrinsicComponent<CheckBoxProps, HTMLSpanElement>(
  (
    { size = Size.Sm, checked, onChange, checkBoxProps, readOnly, disabled, ...rest }: CheckBoxProps,
    ref
  ): JSX.Element => {
    return (
      <Styled.CheckBox size={size} disabled={Boolean(disabled)} checked={Boolean(checked)} ref={ref} {...rest}>
        <Styled.Input
          checked={checked}
          disabled={disabled}
          size={size}
          onChange={readOnly || disabled ? undefined : onChange}
          {...checkBoxProps}
        />
        {checked ? (
          <Tick color={lightPalette[Color.ButtonPrimaryText]} size={getCheckboxIconSize(size)} />
        ) : (
          <Styled.UnCheckedIcon>
            <Tick color={lightPalette[Color.AccentPrimaryOpacity]} size={getCheckboxIconSize()} />
          </Styled.UnCheckedIcon>
        )}
      </Styled.CheckBox>
    );
  }
);

CheckBox.defaultProps = {
  checked: false,
  size: Size.Sm,
};

CheckBox.propTypes = {
  checked: PT.bool,
  onChange: PT.func,
  checkBoxProps: PT.object,
  readOnly: PT.bool,
  disabled: PT.bool,
  isHovering: PT.bool,
  size: PT.oneOf(objectValues(Size)),
};

export default CheckBox;
