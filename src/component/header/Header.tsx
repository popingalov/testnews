import React, { useState } from 'react';

import { AppBar, Box, Toolbar, IconButton, Container } from '@mui/material';
import Adb from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { ROUTES } from 'constants/routes';

import s from './style.module.css';
import LanguageSelection from 'component/languageSelection/LanguageSelection';
import { useAppDispatch, useAppSelector } from 'hooks/hook';
import { getToken } from 'redux/select/tokenSelect';
import { changeDialogTrigger } from 'redux/slice/trigers';
import HeaderRoutes from './headerComponents/HeaderRoutes';
import MobileMenu from './headerComponents/mobileMenu/MobileMenu';
import RightMenu from './headerComponents/rightMenu/RightMenu';

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const token = useAppSelector(getToken);
  const dispatch = useAppDispatch();
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page: string) => {
    if (page === 'auth') {
      dispatch(changeDialogTrigger(true));
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const fixRoutes = ROUTES.map(el => {
    if (!token && el === 'profile') {
      return 'auth';
    }
    return el;
  });
  return (
    <header className={s.header}>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Adb sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <MobileMenu
                anchorElNav={anchorElNav}
                routes={fixRoutes}
                handleCloseNavMenu={handleCloseNavMenu}
              />
            </Box>
            <Adb sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <HeaderRoutes
                routes={fixRoutes}
                handleCloseNavMenu={handleCloseNavMenu}
              />
            </Box>

            {token && (
              <RightMenu
                anchorElUser={anchorElUser}
                handleCloseUserMenu={handleCloseUserMenu}
                handleOpenUserMenu={handleOpenUserMenu}
              />
            )}
            <LanguageSelection />
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}
