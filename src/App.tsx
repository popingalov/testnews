import { HomePage } from './pages';
import { Header, Loader } from 'component';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
const router = createBrowserRouter([
  {
    children: [
      {
        path: 'team',
        element: <h1>Hi world</h1>,
      },
    ],
    path: '/',
    element: <HomePage />,
    // loader: async ({ params, request }) => {
    //   // const result = await postsApi.useGetPostsQuery();
    //   const result = await await fetch(
    //     'https://jsonplaceholder.typicode.com/posts/1',
    //   );
    //   console.log('loader');
    //   return result;
    // },

    errorElement: <Navigate to="/" />,
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
  console.log('app');

  return (
    <>
      <Header />
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </>
  );
}

export default App;
