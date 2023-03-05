import { RouterProvider } from 'react-router-dom';
import { Container } from '@mui/material';
import { useEffect } from 'react';
//
import { Loader } from 'component';
//
import s from './style.module.css';
import { router } from './router';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'hooks/hook';
import { getLeng } from 'redux/select/lengSelect';
//

function App() {
  const { i18n } = useTranslation();
  const leng = useAppSelector(getLeng);
  useEffect(() => {
    i18n.changeLanguage(leng);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Container className={s.container}>
        <RouterProvider router={router} fallbackElement={<Loader />} />
      </Container>
    </>
  );
}

export default App;
