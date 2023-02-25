import { Navigate } from 'react-router-dom';
import { getToken } from 'redux/select/tokenSelect';
import { useAppSelector } from 'hooks/hook';

interface IProps {
  children?: React.ReactElement;
  redirectTo?: string;
}

function PrivateRoute({ children, redirectTo = '/news' }: IProps) {
  const isLogIn = useAppSelector(getToken);
  return isLogIn && children ? children : <Navigate to={redirectTo} />;
}

export default PrivateRoute;
