import { Navigate, useActionData, useAsyncValue } from 'react-router-dom';
import { useGetTokenQuery } from 'redux/api/token';

interface IProps {
  children?: React.ReactElement;
  redirectTo?: string;
}

function PrivateRoute({ children, redirectTo = '/news' }: IProps) {
  // const isLoggedIn = useGetTokenQuery('');
  // console.log(isLoggedIn);
  const test = useActionData();
  const test2 = useAsyncValue();
  console.log(test, test2);

  return true && children ? children : <Navigate to={redirectTo} />;
}

export default PrivateRoute;
