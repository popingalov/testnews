import React, { useState } from 'react';

import {
  MenuItem,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
} from '@mui/material';
import Adb from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { ROUTES, SETTINGS } from 'constants/routes';

import s from './style.module.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelection from 'component/languageSelection/LanguageSelection';

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { t } = useTranslation();
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page: string) => {
    console.log(page);

    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={() => handleCloseNavMenu('')}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {ROUTES.map((page, idx) => (
                  <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                    <Link to={page.toLowerCase()}>
                      <Typography textAlign="center">
                        {t(`header.nav.${idx as 0}`)}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Adb sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {ROUTES.map((page, idx) => (
                <Link key={page} to={page.toLowerCase()}>
                  <Button
                    onClick={() => handleCloseNavMenu(page)}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {t(`header.nav.${idx as 0}`)}
                  </Button>
                </Link>
              ))}
            </Box>

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
                {SETTINGS.map((setting, idx) => (
                  <Link key={setting} to={setting}>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">
                        {t(`header.settings.${idx as 0}`)}
                      </Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
            <LanguageSelection />
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}
