import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface IProps {
  routes: string[];
  handleCloseNavMenu: (page: string) => void;
}

export default function HeaderRoutes({ routes, handleCloseNavMenu }: IProps) {
  const { t } = useTranslation();
  return (
    <>
      {routes.map(page => {
        return page !== 'auth' ? (
          <Link key={page} to={page.toLowerCase()}>
            <Button
              onClick={() => handleCloseNavMenu(page)}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {t(`header.nav.${page as 'home'}`)}
            </Button>
          </Link>
        ) : (
          <Button
            key={page}
            onClick={() => handleCloseNavMenu(page)}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {t(`header.nav.${page as 'home'}`)}
          </Button>
        );
      })}
    </>
  );
}
