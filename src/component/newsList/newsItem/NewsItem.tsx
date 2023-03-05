import s from './style.module.css';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { useDeletePostMutation } from 'redux/api/posts';
import { useAppDispatch } from 'hooks/hook';
import { setRemoveId } from 'redux/slice/removeSimulation';
import { useTranslation } from 'react-i18next';

interface IProps {
  photoItem: IPhoto;
  newsItem: IPost;
}

export default function NewsItem({ photoItem, newsItem }: IProps) {
  const [removeItem] = useDeletePostMutation();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  function handlerRemove(id: number) {
    removeItem({ id });
    dispatch(setRemoveId(id));
  }
  const { src, photographer } = photoItem;
  console.log(newsItem);

  return (
    <Grid item xs={6} md={4}>
      <Card className={s.card}>
        <div>
          <CardMedia
            image={src.medium}
            component="img"
            alt={photographer}
            title={photographer}
            className={s.cardMedia}
          />
          <CardContent>
            <Typography variant="h6" component="h3">
              {t('newsPage.newsItem.title')}:
              <p className={s.text}>{newsItem.title}</p>.
            </Typography>
            <Typography variant="body1">
              <span className={s.span}>{t('newsPage.newsItem.author')}</span>:
              <span className={s.text}>{photographer}</span>
            </Typography>
            <Typography className={s.fix} variant="body1">
              <Typography className={s.span}>
                {t('newsPage.newsItem.news')}:
              </Typography>
              <Typography className={s.text}>{newsItem.body}.</Typography>
            </Typography>
          </CardContent>
        </div>
        <CardActions>
          <Button variant="text" onClick={() => handlerRemove(newsItem.id)}>
            {t('newsPage.newsItem.button')}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
