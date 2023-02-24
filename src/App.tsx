import { HomePage } from './pages';
import { Header, Loader } from 'component';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import PrivateRoute from 'helpers/privateRoute';
const router = createBrowserRouter([
  {
    children: [
      {
        path: 'team',
        element: <h1>Hi world</h1>,
      },
    ],
    path: '/',
    element: [
      <PrivateRoute key="privateRoute">
        <HomePage />
      </PrivateRoute>,
    ],
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
