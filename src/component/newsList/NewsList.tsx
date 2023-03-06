import { Grid } from '@mui/material';
import NewsItem from './newsItem/NewsItem';

interface IProps {
  data: IPhoto[];
  news: IPost[];
  trigger?: boolean;
}

export default function NewsList({ data, news, trigger = true }: IProps) {
  return (
    <Grid container spacing={2}>
      {news.map((el, idx) => {
        const photo = data[idx] || data[0];

        return (
          <NewsItem
            key={el.id}
            newsItem={el}
            trigger={trigger}
            photoItem={photo}
          />
        );
      })}
    </Grid>
  );
}
