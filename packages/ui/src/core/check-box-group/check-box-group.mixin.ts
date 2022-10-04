import { WithTheme } from '../../theme/entity';
import { FontVariant as FV } from '../../utils/types/typography';

import { Size } from '../check-box/types';

export const sizeCheckboxGroupMixin = {
  [Size.Sm]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => font[FV.LabelSmall],

  [Size.Md]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => font[FV.LabelNormal],
};
