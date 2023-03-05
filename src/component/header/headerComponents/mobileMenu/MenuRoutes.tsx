import { MenuItem, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface IProps {
  routes: string[];
  handleCloseNavMenu: (page: string) => void;
}

export default function MenuRoutes({ routes, handleCloseNavMenu }: IProps) {
  const { t } = useTranslation();
  return (
    <>
      {routes.map(page => (
        <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
          {page !== 'auth' ? (
            <Link to={page.toLowerCase()}>
              <Typography textAlign="center">
                {t(`header.nav.${page as 'home'}`)}
              </Typography>
            </Link>
          ) : (
            <Typography textAlign="center">
              {t(`header.nav.${page as 'home'}`)}
            </Typography>
          )}
        </MenuItem>
      ))}
    </>
  );
}
