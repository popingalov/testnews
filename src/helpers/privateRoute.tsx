import { Navigate } from 'react-router-dom';
import { useGetTokenQuery } from 'redux/api/token';

interface IProps {
  children?: React.ReactElement;
  redirectTo?: string;
}

function PrivateRoute({ children, redirectTo = '/news' }: IProps) {
  const isLoggedIn = useGetTokenQuery('');
  console.log(isLoggedIn);

  return isLoggedIn && children ? children : <Navigate to={redirectTo} />;
}

export default PrivateRoute;
