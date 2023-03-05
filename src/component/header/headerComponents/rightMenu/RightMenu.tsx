import {
  MenuItem,
  Box,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Tooltip,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import s from '../../style.module.css';
import { SETTINGS } from 'constants/routes';
import { Link } from 'react-router-dom';
interface IProps {
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  anchorElUser: null | HTMLElement;
  handleCloseUserMenu: () => void;
}

export default function RightMenu({
  handleOpenUserMenu,
  anchorElUser,
  handleCloseUserMenu,
}: IProps) {
  const { t } = useTranslation();
  return (
    <Box sx={{ flexGrow: 0 }} className={s.boxSelector}>
      <Tooltip title={t('header.settings.title')}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {SETTINGS.map(setting => (
          <Link key={setting} to={setting}>
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">
                {t(`header.settings.${setting as 'profile'}`)}
              </Typography>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </Box>
  );
}
