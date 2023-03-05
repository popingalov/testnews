import { Button, Card, Typography } from '@mui/material';
import { NewsList } from 'component';
import { useAppDispatch, useAppSelector } from 'hooks/hook';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetPhotosQuery } from 'redux/api/pixel';
import { useGetPostsQuery } from 'redux/api/posts';
import { getRemoveSimulation } from 'redux/select/removeSimulation';
import { changeLoaderTrigger } from 'redux/slice/trigers';
import s from './style.module.css';
const NewsPage = () => {
  const dispatch = useAppDispatch();
  const [allNews, setAllNews] = useState<IPost[]>([]);
  const [allPhoto, setPhotos] = useState<IPhoto[]>([]);
  const { t } = useTranslation();
  const filterId = useAppSelector(getRemoveSimulation);
  const [page, setPage] = useState(1);
  const {
    data: photos,
    error,
    isLoading,
    isSuccess: isSuccessPhoto,
  } = useGetPhotosQuery(page);
  const {
    data: news,
    isLoading: loadNews,
    isSuccess,
  } = useGetPostsQuery({ page });

  useEffect(() => {
    const test = isSuccess && isSuccessPhoto;
    if (test) {
      news &&
        setAllNews(state => {
          return state.concat(news);
        });
      photos &&
        setPhotos(state => {
          return state.concat(photos.photos);
        });
      dispatch(changeLoaderTrigger(false));
    }
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
