import * as s from './styles';
import { IInputText } from './types';

export const InputText = ({ type = 'text', name, placeholder, value, onChange }: IInputText) => {
  return (
    <s.Input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
  );
};
