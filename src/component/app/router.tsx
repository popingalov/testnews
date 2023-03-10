import { createBrowserRouter, Navigate } from 'react-router-dom';
// import { store } from 'redux/store';
// import { postsApi } from 'redux/api/posts';
//
import { HomePage, NewsPage } from 'pages';
import Layout from 'component/layout/Layoute';
// import loader from 'helpers/loader';
import ErrorElement from 'pages/errorPage/ErrorElement';
import Header from 'component/header/Header';
import ProfilePage from 'pages/profilePage/ProfilePage';
import PrivateRoute from 'hooks/PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="home" />,
    errorElement: (
      <>
        <Header />
        <ErrorElement />
      </>
    ),
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
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
        element: <NewsPage />,
        children: [
          {
            path: 'team',
            element: <h1>Hi world</h1>,
          },
        ],
      },
      {
        path: '/profile',
        //гівно повне ну як мінімум для роботи зі стейтом, воно спрацьовує раніше, і коли
        // перезавантажити сторінку токен буде null завжди
        // loader: loader,
        element: (
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
