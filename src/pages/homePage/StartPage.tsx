import { Loader } from 'component';
import { useEffect } from 'react';
import {
  useNavigate,
  Outlet,
  useLocation,
  // useLoaderData,
} from 'react-router-dom';
import { useGetPostsQuery } from 'redux/api/posts';
import { setToken } from 'redux/slice/tokenSlice';
import { useCreateTokenMutation } from 'redux/api/token';
import { useAppDispatch } from 'hooks/hook';

export default function HomePage() {
  const { data: result, isLoading } = useGetPostsQuery();
  const upDisp = useAppDispatch();
  const base = { username: 'admin', password: 12345 };
  const [createToken, { isLoading: loadToken, data }] =
    useCreateTokenMutation();
  const location = useLocation();
  const nav = useNavigate();

  async function handler() {
    createToken(base);
  }

  useEffect(() => {
    if (data) {
      upDisp(setToken(data.token));
      console.log(location);

      nav(location.pathname + '/team');
    }
  }, [loadToken]);

  if (isLoading || loadToken) return <Loader />;

  return (
    <>
      <button onClick={handler}>Click me</button>
      <h1>{result ? result[0].title : 'testy'}</h1>
      {<Outlet />}
    </>
  );
}
