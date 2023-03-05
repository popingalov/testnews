import { Grid } from '@mui/material';
import NewsItem from './NewsItem';

interface IProps {
  data: IPhoto[];
}

export default function NewsList({ data }: IProps) {
  return (
    <Grid container spacing={2}>
      {data.map(el => (
        <NewsItem key={el.id} item={el} />
      ))}
    </Grid>
  );
}
