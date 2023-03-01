import PrivateRoute from 'helpers/privateRoute';
import { createBrowserRouter } from 'react-router-dom';
// import { store } from 'redux/store';
// import { postsApi } from 'redux/api/posts';
//
import { HomePage } from '../../pages';
import Layout from 'component/layout/Layoute';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/home',
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
        path: '/profile',
        element: <HomePage />,
      },
    ],
  },
]);
