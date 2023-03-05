import { Grid } from '@mui/material';
import NewsItem from './newsItem/NewsItem';

interface IProps {
  data: IPhoto[];
  news: IPost[];
}

export default function NewsList({ data, news }: IProps) {
  return (
    <Grid container spacing={2}>
      {news.map((el, idx) => (
        <NewsItem key={el.id} newsItem={el} photoItem={data[idx]} />
      ))}
    </Grid>
  );
}
