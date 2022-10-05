import type { Values } from '../../utils/types';
import { InputBackgroundColor } from '../../utils/types';
import { InputSizeType } from '../input/input.props';

export type InputBackgroundType = Values<typeof InputBackgroundColor>;

export interface TextareaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  value: string;
  size?: InputSizeType;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}
