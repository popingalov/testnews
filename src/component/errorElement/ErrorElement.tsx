import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//
import gif from 'assets/gif.gif';
import dance from 'assets/danceWithMe.mp3';
//
import { Box, Typography } from '@mui/material';
//
import s from './style.module.css';
import { useTranslation } from 'react-i18next';
//
export default function ErrorElement() {
  const { t } = useTranslation();
  const audio = new Audio(dance);
  useEffect(() => {
    audio.volume = 1;
    audio.play();

    return () => {
      audio.pause();
    };
  }, []);

  return (
    <Box className={s.box}>
      <Typography>{t('errorElement.message')}</Typography>
      <img className={s.alert} src={gif} alt="gif" />
    </Box>
  );
}
