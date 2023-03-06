import { Button, Card, Typography } from '@mui/material';
import { NewsList } from 'component';
import { useAppDispatch, useAppSelector } from 'hooks/hook';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetPhotosQuery } from 'redux/api/pixel';
import { useGetPostsQuery } from 'redux/api/posts';
import { getRemoveSimulationId } from 'redux/select/removeSimulation';
import { changeLoaderTrigger } from 'redux/slice/trigers';
import s from './style.module.css';
const NewsPage = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const filterId = useAppSelector(getRemoveSimulationId);
  const [allNews, setAllNews] = useState<IPost[]>([]);
  const [allPhoto, setPhotos] = useState<IPhoto[]>([]);
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(true);
  const { data: photos, error, isLoading } = useGetPhotosQuery(page);
  const { data: news, isLoading: loadNews } = useGetPostsQuery(
    { page },
    { skip },
  );
  useEffect(() => {
    if (news?.length) {
      news &&
        setAllNews(state => {
          return state.concat(news);
        });
      photos &&
        setPhotos(state => {
          return state.concat(photos.photos);
        });
      dispatch(changeLoaderTrigger(false));
      return;
    }
    setSkip(false);
  }, [news]);

  function handlerLoadMore(event: React.MouseEvent<HTMLButtonElement>) {
    setPage(page + 1);
    dispatch(changeLoaderTrigger(true));
  }

  const filtersNews = allNews.filter(el => !filterId.includes(el.id));

  return (
    <>
      {(isLoading || loadNews) && <Typography>Loading...</Typography>}
      {error && <Typography>Error: </Typography>}

      <Card className={s.container}>
        {photos && filtersNews && (
          <>
            <NewsList data={allPhoto} news={filtersNews} />
            <Button value={page} onClick={handlerLoadMore}>
              {t('newsPage.page.button')}
            </Button>
          </>
        )}
      </Card>
    </>
  );
};

export default NewsPage;
