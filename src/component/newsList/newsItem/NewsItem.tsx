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
import { useAppDispatch, useAppSelector } from 'hooks/hook';
import { setRemoveId } from 'redux/slice/removeSimulation';
import { useTranslation } from 'react-i18next';
import { getToken } from 'redux/select/tokenSelect';

interface IProps {
  photoItem: IPhoto;
  newsItem: IPost;
  trigger: boolean;
}

export default function NewsItem({ photoItem, newsItem, trigger }: IProps) {
  const token = useAppSelector(getToken);
  const [removeItem] = useDeletePostMutation();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  function handlerRemove(item: IPost) {
    removeItem({ id: item.id });
    dispatch(setRemoveId(item));
  }
  const { src, photographer } = photoItem;

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
              <span className={s.span}>{t('newsPage.newsItem.news')}:</span>
              <span className={s.text}>{newsItem.body}.</span>
            </Typography>
          </CardContent>
        </div>
        <CardActions>
          {trigger && (
            <Button
              disabled={!token}
              variant="text"
              aria-disabled={!!token ? 'true' : undefined}
              onClick={() => handlerRemove(newsItem)}
            >
              {t('newsPage.newsItem.button')}
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}
