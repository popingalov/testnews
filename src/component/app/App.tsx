import { RouterProvider } from 'react-router-dom';
import { Container } from '@mui/material';

//
import { Loader } from 'component';
//
import s from './style.module.css';
import { router } from './router';
//

function App() {
  return (
    <>
      <Container className={s.container}>
        <RouterProvider router={router} fallbackElement={<Loader />} />
      </Container>
    </>
  );
}

export default App;
