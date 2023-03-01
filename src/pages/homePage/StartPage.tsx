import { Loader } from 'component';
import { useEffect } from 'react';
import {
  useNavigate,
  Outlet,
  // useLoaderData,
} from 'react-router-dom';
import { useGetPostsQuery } from 'redux/api/posts';
import { setToken } from 'redux/slice/tokenSlice';
import { useCreateTokenMutation } from 'redux/api/token';
import { useAppDispatch } from 'hooks/hook';

export default function HomePage() {
  const { data: result, isLoading } = useGetPostsQuery();
  // const result: any = useLoaderData();
  const upDisp = useAppDispatch();
  const base = { username: 'admin', password: 12345 };
  const [createToken, { isLoading: loadToken, data }] =
    useCreateTokenMutation();
  const nav = useNavigate();

  async function handler() {
    createToken(base);
  }

  useEffect(() => {
    if (data) {
      upDisp(setToken(data.token));
      nav('/team');
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
