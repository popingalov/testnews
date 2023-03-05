import { Card, Typography } from '@mui/material';
import { NewsList } from 'component';
import { useGetPhotosQuery } from 'redux/api/pixel';
import { useGetPostsQuery } from 'redux/api/posts';

const NewsPage = () => {
  const { data: photos, error, isLoading } = useGetPhotosQuery(1);
  const { data: news, isLoading: loadNews } = useGetPostsQuery({ page: 1 });
  return (
    <Card>
      {(isLoading || loadNews) && <Typography>Loading...</Typography>}
      {error && <Typography>Error: </Typography>}
      {photos && news && (
        <>
          <NewsList data={photos.photos} />
        </>
      )}
    </Card>
  );
};

export default NewsPage;
