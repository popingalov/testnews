import { FormControl, MenuItem, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

//
import { resources } from 'i18n';
//код
export default function LanguageSelection() {
  const [leng, setLeng] = useState<string>('EN');
  const { t, i18n } = useTranslation();
  function handleChange(ev: SelectChangeEvent) {
    const { value } = ev.target;
    i18n.changeLanguage(value);
    setLeng(value);
  }
  return (
    <FormControl>
      <Select id="demo-simple-select" value={leng} onChange={handleChange}>
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
