import { FormControl, MenuItem, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

//
import { resources } from 'i18n';
import { useAppDispatch, useAppSelector } from 'hooks/hook';
import { setLeng } from 'redux/slice/leng';
import { getLeng } from 'redux/select/lengSelect';

//код
export default function LanguageSelection() {
  const startLang = useAppSelector(getLeng);
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();
  function handleChange(ev: SelectChangeEvent) {
    const { value } = ev.target;
    i18n.changeLanguage(value);
    dispatch(setLeng(value));
  }
  return (
    <FormControl>
      <Select id="demo-simple-select" value={startLang} onChange={handleChange}>
        {Object.keys(resources).map((el: string) => {
          return (
            <MenuItem key={el} value={el}>
              {el}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
