import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import StyledLabel from '../label/label.styles';
import StyledFormHint from '../form-hint/form-hint.styles';
import { sizeTagFieldMixin, fontTagFieldMixin } from './tag-field.mixin';
import type { TagFieldSizeType } from './tag-field.props';
import { Size } from './types';

const baseClassName = 'TagField';

const TagFieldRoot = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ fullWidth }: With<WithTheme, { fullWidth: boolean }>) => css`
    width: ${fullWidth ? '100%' : '342px'};

    ${StyledFormHint.FormHint} {
      margin-top: 4px;
    }

    ${StyledLabel.Label} {
      margin-bottom: 4px;
    }
  `
);

const TagInputFieldWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'tagInputFieldWrapper'),
})`
  position: relative;
`;

const TagFieldWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'tagFieldWrapper'),
})(
  ({ size, error, theme }: With<WithTheme, { size: TagFieldSizeType; error: boolean }>) => css`
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    border: 1px solid ${error ? theme.palette[PColor.Error] : theme.palette[PColor.BackgroundPrimaryStateless]};
    border-radius: 4px;
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    min-height: 100px;

    ${StyledFormHint.FormHint} {
      margin-top: 4px;
    }

    ${StyledLabel.Label} {
      margin-bottom: 4px;
    }

    ${sizeTagFieldMixin[size]}
  `
);

const TagFieldActions = styled.div.attrs({
  className: generateClassNames(baseClassName, 'tagFieldActions'),
})`
  display: flex;
  gap: 12px;
`;

const TagFieldLoader = styled.span.attrs({
  className: generateClassNames(baseClassName, 'loader'),
})`
  display: flex;
  margin-left: 8px;
`;

const TagFieldListWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'listWrapper'),
})(
  ({ $loading }: { $loading: boolean | undefined }) => css`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 8px;
    margin: 0;
    padding: 0;
    width: 100%;

    ${TagFieldLoader} {
      svg {
        animation: ${$loading ? 'spinner 1.2s linear infinite' : '1.2s'};
      }
    }
  `
);

const TagFieldInput = styled.input.attrs({
  className: generateClassNames(baseClassName, 'input'),
})(
  ({ theme }: WithTheme) => css`
    background: transparent;
    border: none;
    width: 100%;
    outline: none;
    color: ${theme.palette[PColor.LinkHover]};
  `
);

const TagFieldInputWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'inputWrapper'),
})(
  ({
    size = Size.Md,
    filterInputWidth = 100,
    theme,
  }: With<WithTheme, { size: TagFieldSizeType; filterInputWidth?: string | number }>) => css`
    background: none;
    flex-grow: 1;
    height: ${size === Size.Md ? 26 : 22}px;
    display: flex;
    align-items: center;
    width: ${Number.isFinite(+filterInputWidth) ? `${filterInputWidth}px` : filterInputWidth};

    ${TagFieldInput} {
      &::-webkit-input-placeholder {
        color: ${theme.palette[PColor.TextPlaceholder]};
        ${fontTagFieldMixin[size]}
      }
    }
  `
);

const TagFieldButtonsWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'tagFieldButtonsWrapper'),
})(
  () => css`
    display: flex;
    align-items: center;
    gap: 10px;
  `
);

const TagFieldCopyIcon = styled.div.attrs({
  className: generateClassNames(baseClassName, 'tagFieldCopyIcon'),
})`
  cursor: pointer;
  height: 16px;
  margin-left: auto;
`;

const TagFieldSuggestionWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'suggestionWrapper'),
})`
  position: relative;
  margin-top: 16px;
`;

const TagFieldSuggestionLabel = styled.label.attrs({
  className: generateClassNames(baseClassName, 'suggestionLabel'),
})(
  ({ theme }: WithTheme) => css`
    display: flex;
    align-items: center;
    font-size: 12px;
    padding: 6px 0;
    color: ${theme.palette[PColor.LinkHover]};
  `
);

const TagFieldSuggestionIcon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})`
  display: flex;
  margin-left: 4px;
`;

const TagFieldSuggestionWrapperList = styled.div.attrs({
  className: generateClassNames(baseClassName, 'suggestionWrapperList'),
})`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  width: 100%;
  gap: 8px;
`;

const TagFieldSuggestionList = styled.div.attrs({
  className: generateClassNames(baseClassName, 'suggestionList'),
})(
  ({ theme }: WithTheme) => css`
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 8px 8px 0;
    padding: 4px 12px;
    border-radius: ${theme.shape.borderRadius[BRSize.Sm]};
    border: 1px dashed ${theme.palette[PColor.LinkPrimary]};
    background: transparent;
    color: ${theme.palette[PColor.LinkPrimary]};
    line-height: 16.4px;
    user-select: none;
    max-height: 24px;
  `
);

const Wrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'wrapper'),
})`
  position: relative;
`;

const Styled = applyDisplayNames({
  TagFieldRoot,
  TagInputFieldWrapper,
  TagFieldWrapper,
  TagFieldActions,
  TagFieldListWrapper,
  TagFieldInputWrapper,
  TagFieldInput,
  TagFieldSuggestionWrapper,
  TagFieldSuggestionLabel,
  TagFieldSuggestionIcon,
  TagFieldSuggestionWrapperList,
  TagFieldSuggestionList,
  TagFieldLoader,
  TagFieldButtonsWrapper,
  TagFieldCopyIcon,
  Wrapper,
});

export default Styled;
