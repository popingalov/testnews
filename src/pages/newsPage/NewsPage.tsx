import { Card, Typography, CardMedia, CardContent } from '@mui/material';
import { useEffect, useState } from 'react';
import { useGetPhotosQuery } from 'redux/api/pixel';

const NewsPage = () => {
  const [photo, setPhoto] = useState<any>(null);
  const { data, error, isLoading } = useGetPhotosQuery(1);

  useEffect(() => {
    if (data) {
      setPhoto(data.photos[0]);
    }
  }, [data]);

  return (
    <Card>
      {isLoading && <Typography>Loading...</Typography>}
      {error && <Typography>Error: </Typography>}
      {photo && (
        <>
          <CardMedia image={photo.src.medium} title={photo.photographer} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {photo.photographer}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {'description'}
            </Typography>
          </CardContent>
        </>
      )}
    </Card>
  );
};

export default NewsPage;
