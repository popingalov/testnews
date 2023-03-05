import { redirect } from 'react-router-dom';
import { changeDialogTrigger } from 'redux/slice/trigers';
import { store } from 'redux/store';

export default function loader() {
  const { token } = store.getState().token;
  const dispatch = store.dispatch;
  !token && dispatch(changeDialogTrigger(true));
  return token ? null : redirect('/home');
}
