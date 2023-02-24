import { Loader } from 'component';
import {
  useNavigate,
  useLocation,
  Outlet,
  useLoaderData,
} from 'react-router-dom';
import { useGetPostsQuery } from 'redux/api/posts';

function HomePage() {
  // const { data: result, isLoading } = useGetPostsQuery();
  const nav = useNavigate();
  const url = useLocation();
  function handler() {
    nav('/team');
  }
  const result: any = useLoaderData();
  // if (isLoading) return <Loader />;
  console.log(result);

  return (
    <>
      <button onClick={handler}>Click me</button>
      <h1>{result ? result[0].title : 'testy'}</h1>

      {<Outlet />}
    </>
  );
}

export { HomePage };
