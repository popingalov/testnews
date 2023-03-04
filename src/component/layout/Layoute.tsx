import { DialogForm, Header, Loader } from 'component';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from 'hooks/hook';
import { getDialogTrigger, getLoaderTrigger } from 'redux/select/trigers';
export default function Layout() {
  const dialog = useAppSelector(getDialogTrigger);
  const loader = useAppSelector(getLoaderTrigger);
  return (
    <>
      <Header />
      {loader && <Loader />}
      {dialog && <DialogForm />}
      <Outlet />
    </>
  );
}
