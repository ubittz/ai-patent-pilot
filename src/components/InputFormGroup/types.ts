import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

import { FlexProps } from '@@components/Flex/types';

export interface InputFormGroupProps extends FlexProps {
  label?: string;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}
