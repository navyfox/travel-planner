import Head from 'next/head';
import React, { createRef, forwardRef, useEffect, ChangeEvent, useState, useCallback } from 'react';
import Image from 'next/image';
import { AxiosError } from 'axios';
import * as s from './styles';
import { IDaysInputProps } from './types';

export const InputDays = ({
  id,
  name,
  label,
  placeholder = 'Number of days to travel',
  defaultValue = '',
  onChangeDay = () => {},
}: IDaysInputProps) => {
  //   const [value, setValue] = useState<IDaysInputProps['value']>(defaultValue);
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let result: number | string = event.target.value.replace(/\D/g, '');
    if (Number(result) > 7) {
      result = 7;
    }
    if (result == 0) {
      result = '';
    }

    setValue(result);
    onChangeDay(Number(result));
  };

  //   const handleChange = useCallback(
  //     (e: ChangeEvent<HTMLInputElement>) => {
  //       setValue(e.target.value);
  //       if (onChange) onChange({ ...e, target: { ...e.target } });
  //     },
  //     [onChange]
  //   );
  return (
    <label>
      <s.Label>{label}</s.Label>
      <s.Input
        name={name}
        type="text"
        placeholder={placeholder}
        // value={value}
        onChange={handleChange}
      />
    </label>
  );
};
