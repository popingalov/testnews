import { HomePage } from './pages';
import { Header, Loader } from 'component';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrivateRoute from 'helpers/privateRoute';
import { Container } from '@mui/material';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
// import { store } from 'redux/store';
// import { postsApi } from 'redux/api/posts';
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute key="privateRoute">
        <HomePage />
      </PrivateRoute>
    ),
    children: [
      {
        path: 'team',
        element: <h1>Hi world</h1>,
      },
    ],

    //чисто для теста робив, ви спитаєте нахера? Да я і сам не знаю
    //   loader: async () => {
    //     const { data } = await store.dispatch(
    //       postsApi.endpoints.getPosts.initiate(),
    //     );
    //     return data;
    //   },
    //   errorElement: <Navigate to="/" />,
  },
  {
    path: '/news',
    element: <HomePage />,
  },
  {
    path: '/profile ',
    element: <HomePage />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <Container>
        <StyledEngineProvider injectFirst>
          <RouterProvider router={router} fallbackElement={<Loader />} />
        </StyledEngineProvider>
      </Container>
    </>
  );
}

export default App;
