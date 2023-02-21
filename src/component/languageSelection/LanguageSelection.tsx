import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { spacing } from '@mui/system';
import theme from 'constants/styleThema';
import { useState } from 'react';
//
//код
export default function LanguageSelection() {
  const [leng, senLeng] = useState<any>('EN');
  function handleChange(ev: SelectChangeEvent<HTMLSelectElement>) {
    ev.preventDefault();
    const { value } = ev.target;
    console.log(value);

    senLeng(value);
  }
  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={leng}
        label="lenguage"
        onChange={handleChange}
      >
        <MenuItem value={'EN'}>EN</MenuItem>
        <MenuItem value={'UA'}>UA</MenuItem>
      </Select>
    </FormControl>
  );
}
