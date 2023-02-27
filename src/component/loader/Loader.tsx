import { Box, CircularProgress } from '@mui/material';
import { Portal } from 'component';
import s from './style.module.css';
export default function Loader() {
  return (
    <Portal>
      <CircularProgress className={s.box} />
    </Portal>
  );
}
