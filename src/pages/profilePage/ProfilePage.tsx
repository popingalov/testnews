import { Card, Typography } from '@mui/material';
import { NewsList } from 'component';
import { useAppSelector } from 'hooks/hook';
import { useTranslation } from 'react-i18next';
import { useGetPhotosQuery } from 'redux/api/pixel';
import { getRemoveSimulationItems } from 'redux/select/removeSimulation';

const ProfilePage = () => {
  const { t } = useTranslation();
  const posts = useAppSelector(getRemoveSimulationItems);

  const { data: photos, error, isLoading, isSuccess } = useGetPhotosQuery(1);
  const test = posts.length > 0;
  return (
    <>
      {isLoading && <Typography>{t('global.loader')}</Typography>}
      {error && <Typography>{t('global.error')}</Typography>}

      {test ? (
        <Card>
          {isSuccess && (
            <NewsList data={photos.photos} trigger={false} news={posts} />
          )}
        </Card>
      ) : (
        <p> {t('profile')}</p>
      )}
    </>
  );
};

export default ProfilePage;
