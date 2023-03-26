import { InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react';
// import { SerializedStyles } from '@emotion/serialize';

export interface IDaysInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'name'> {
  name: string;
  label?: string;
  value?: string;
  placeholder?: string;
  defaultValue?: string | number;
  onChangeDay?: (value: number) => void;
  //   error?: string;
  //   labelProps?: LabelHTMLAttributes<HTMLLabelElement>;

  //   wrapperStyle?: SerializedStyles;
  //   labelStyle?: SerializedStyles;
  //   isDisabled?: boolean;
}
