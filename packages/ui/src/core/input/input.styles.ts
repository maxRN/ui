import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import type { InputProps } from './input.props';
import { sizeInputMixin, fontSizeInputMixin, errorMixin } from './input.mixin';
import { InputSize } from '../../utils/types';
import { getInputBackgroundColor, getInputTextColor } from './input.utils';

const baseClassName = 'Input';

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({ iconClickStart, iconClickEnd, iconType, theme: { palette } }: With<WithTheme, InputProps>) => css`
    display: flex;
    color: ${palette[PColor.IconsPrimary]};
    cursor: ${iconClickStart || iconClickEnd ? 'pointer' : 'default'};

    ${iconType === 'start' &&
    css`
      margin-right: 8px;
    `}

    ${iconType === 'end' &&
    css`
      color: ${palette[PColor.IconsSecondary]};
    `}
  `
);

const ClearIcon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'ClearIcon'),
})(
  ({ isSearchInput, theme: { palette } }: With<WithTheme, InputProps>) => css`
    display: flex;
    cursor: pointer;
    margin-left: 8px;
    color: ${isSearchInput ? palette[PColor.IconsSecondary] : palette[PColor.IconsPrimary]};
  `
);

const CopyIcon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'CopyIcon'),
})(
  ({ theme: { palette } }: With<WithTheme, InputProps>) => css`
    display: flex;
    color: ${palette[PColor.IconsSecondary]};
    cursor: pointer;
  `
);

const Container = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Container'),
})<InputProps>(
  () => css`
    display: block;
    color: inherit;
    font-size: inherit;
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 0;
    border: 0;
    background-color: transparent;
    outline: none;
  `
);

const Base = styled.input.attrs({
  className: generateClassNames(baseClassName, 'Base'),
})<InputProps>(
  ({ theme: { palette } }: WithTheme) => css`
    display: block;
    color: inherit;
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 0;
    border: 0;
    background-color: transparent;
    outline: none;

    &::placeholder {
      color: ${palette[PColor.TextPlaceholder]};
    }
  `
);

const Input = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<InputProps>(
  ({
    size = InputSize.Md,
    error = false,
    fullWidth = false,
    readOnly = false,
    disabled = false,
    isSearchInput = false,
    isHovering = false,
    theme,
  }: With<WithTheme, InputProps>) => css`
    position: relative;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    column-gap: 6px;
    cursor: text;
    transition: all 100ms ease-out;
    width: ${fullWidth ? '100%' : '300px'};
    pointer-events: ${disabled ? 'none' : 'auto'};
    background-color: ${getInputBackgroundColor(readOnly, disabled)};
    border-radius: ${theme.shape.borderRadius[BRSize.Md]};
    border: 1px solid
      ${disabled ? theme.palette[PColor.BordersSecondary] : theme.palette[PColor.BorderPrimaryStateless]};

    color: ${disabled ? theme.palette[PColor.TextPlaceholder] : theme.palette[PColor.TextPrimary]};

    ${sizeInputMixin[size]}

    ${Base} {
      ${fontSizeInputMixin[size]}
    }

    ${!readOnly &&
    !disabled &&
    css`
      &:focus-within {
        background-color: ${theme.palette[PColor.BackgroundSecondary]}!important;
        border: 1px solid ${theme.palette[PColor.AccentStateless]};

        &:hover {
          border: 1px solid ${theme.palette[PColor.AccentStateless]};
          ${Icon} {
            color: ${theme.palette[PColor.IconsPrimary]};
          }
        }
      }

      ${isHovering &&
      css`
        ${Icon} {
          color: ${theme.palette[PColor.IconsPrimaryHover]};
        }
      `}

      &:hover {
        background-color: ${isSearchInput
          ? theme.palette[PColor.BackgroundHover]
          : theme.palette[PColor.BackgroundStateless]};
        border: 1px solid ${theme.palette[PColor.BordersPrimaryHover]};

        ${Icon} {
          color: ${theme.palette[PColor.IconsPrimaryHover]};
        }
      }
    `}

    &:hover {
      color: ${getInputTextColor(readOnly, disabled)};
    }

    ${error && errorMixin}
  `
);

const Tags = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Tags'),
})<InputProps>(
  () => css`
    display: inline;
    color: inherit;
    width: max-content;
    min-width: 0;
    margin: 0;
    padding: 0;
    border: 0;
    background-color: transparent;
    outline: none;
  `
);
// TODO: refactor how we implement tags in input
//  display: ${renderTags ? 'inline' : 'block'};
// width: ${renderTags ? 'min-content' : '100%'};

const Styled = applyDisplayNames({
  Input,
  Container,
  Tags,
  Base,
  Icon,
  ClearIcon,
  CopyIcon,
});

export default Styled;
