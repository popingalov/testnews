import { Navigate } from 'react-router-dom';
import { getToken } from 'redux/select/tokenSelect';
import { useAppSelector } from './hook';

interface IProps {
  children: React.ReactNode | any;
  redirectTo?: string;
}

export default function PrivateRoute({ children, redirectTo = '/' }: IProps) {
  const isLoggedIn = useAppSelector(getToken);

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
}
