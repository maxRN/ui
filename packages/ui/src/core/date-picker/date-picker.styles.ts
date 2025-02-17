import styled, { css } from 'styled-components';
import { FontVariant } from '@scaleflex/ui/utils/types/typography';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';

import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import InputGroup from '../input-group';
import { InputProps } from '../input';

const baseClassName = 'Date-picker';

const DatePicker = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ fullWidth }: With<WithTheme, InputProps>) => css`
    position: relative;
    width: ${fullWidth ? '100%' : '300px'};
  `
);

const Placeholder = styled.div.attrs({
  className: generateClassNames(baseClassName, 'placeholder'),
})(
  ({ fullWidth, theme, readOnly, disabled }: With<WithTheme, InputProps>) => css`
    position: absolute;
    top: 32px;
    left: 18px;
    width: ${fullWidth ? '95%' : '244px'};
    height: 24px;
    ${theme.typography.font[FontVariant.LabelLarge]}
    color: ${theme.palette[PColor.TextPlaceholder]};
    background: ${readOnly || disabled
      ? theme.palette[PColor.BackgroundHover]
      : theme.palette[PColor.BackgroundStateless]};
    pointer-events: ${readOnly || disabled ? 'none' : 'all'};
  `
);

const DatePickerInput = styled(InputGroup).attrs({
  className: generateClassNames(baseClassName, 'input'),
})<InputProps>(
  ({ isHovering = false, theme }: With<WithTheme, InputProps>) => css`
    input[type='date']::-webkit-calendar-picker-indicator {
      display: none;
      -webkit-appearance: none;
    }

    ${isHovering &&
    css`
      border: 1px solid ${theme.palette[PColor.BordersPrimaryHover]};
    `}
  `
);

const Styled = applyDisplayNames({
  DatePicker,
  DatePickerInput,
  Placeholder,
});

export default Styled;
