import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import Switcher from '../switcher';
import type { SwitcherGroupProps } from './switcher-group.props';
import Styled from './switcher-group.styles';
import { SwitcherSize } from '../switcher/switcher-size';

const SwitcherGroup = intrinsicComponent<SwitcherGroupProps, HTMLLabelElement>(
  ({ size, label, switcherProps, readOnly, disabled, ...rest }: SwitcherGroupProps, ref): JSX.Element => (
    <Styled.SwitcherGroup disabled={disabled} ref={ref}>
      <Switcher size={size} switcherProps={switcherProps} readOnly={readOnly} disabled={disabled} {...rest} />

      <Styled.Label disabled={disabled} size={size}>
        {label}
      </Styled.Label>
    </Styled.SwitcherGroup>
  )
);

SwitcherGroup.defaultProps = {
  checked: false,
  size: SwitcherSize.Sm,
};

SwitcherGroup.propTypes = {
  label: PT.string,
  checked: PT.bool,
  onChange: PT.func,
  switcherProps: PT.object,
  readOnly: PT.bool,
  disabled: PT.bool,
  size: PT.oneOf(objectValues(SwitcherSize)),
};

export default SwitcherGroup;
