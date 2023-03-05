import MenuRoutes from './MenuRoutes';
import { Menu } from '@mui/material';
interface IProps {
  routes: string[];
  handleCloseNavMenu: (page: string) => void;
  anchorElNav: null | HTMLElement;
}
export default function MobileMenu({
  routes,
  handleCloseNavMenu,
  anchorElNav,
}: IProps) {
  return (
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
      <MenuRoutes routes={routes} handleCloseNavMenu={handleCloseNavMenu} />
    </Menu>
  );
}
