import { useLoaderData } from 'react-router-dom';

export default function ProfilePage() {
  const loadResult = useLoaderData();
  if (!loadResult) {
    return <h1>Now</h1>;
  }
  return <h1>Profile Page</h1>;
}
