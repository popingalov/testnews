import { redirect } from 'react-router-dom';
import { store } from 'redux/store';

export default function loader() {
  const { token } = store.getState().token;
  return token ? null : redirect('/home');
}
