import { Loader } from 'component';
import {
  useLoaderData,
  useNavigate,
  useLocation,
  Outlet,
} from 'react-router-dom';
import { useGetPostsQuery } from 'redux/api/posts';

export default function HomePage() {
  const { data: result, isLoading } = useGetPostsQuery();

  const nav = useNavigate();
  const url = useLocation();
  function handler() {
    nav('/team');
  }
  if (isLoading) return <Loader />;
  return (
    <>
      <Loader />
      <button onClick={handler}>Click me</button>
      <h1>{result[0].title || 'testy'}</h1>
      {<Outlet />}
    </>
  );
}
