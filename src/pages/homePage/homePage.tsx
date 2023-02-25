import { Loader } from 'component';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  useNavigate,
  useLocation,
  Outlet,
  // useLoaderData,
} from 'react-router-dom';
import { useGetPostsQuery } from 'redux/api/posts';
import { setToken } from 'redux/api/slice/tokenSlice';
import { useCreateTokenMutation } from 'redux/api/token';

function HomePage() {
  const { data: result, isLoading } = useGetPostsQuery();
  // const result: any = useLoaderData();
  const dispatch = useDispatch();
  const base = { username: 'admin', password: 12345 };
  const [createToken, { isLoading: load2, error, data }] =
    useCreateTokenMutation();
  const nav = useNavigate();
  const url = useLocation();
  async function handler() {
    createToken(base);
    nav('/team');
  }

  useEffect(() => {
    const newError: any = error;
    if (newError) {
      dispatch(setToken(data.token));
    }
  }, [load2]);

  if (isLoading || load2) return <Loader />;

  return (
    <>
      <button onClick={handler}>Click me</button>
      <h1>{result ? result[0].title : 'testy'}</h1>

      {<Outlet />}
    </>
  );
}

export { HomePage };
