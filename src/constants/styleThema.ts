import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // синій
      light: '#63a4ff',
      dark: '#004ba0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#dc004e', // рожевий
      light: '#ff5c8d',
      dark: '#9a0036',
      contrastText: '#fff',
    },
    error: {
      main: '#f44336', // червоний
      light: '#e57373',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    warning: {
      main: '#ff9800', // оранжевий
      light: '#ffb74d',
      dark: '#f57c00',
      contrastText: '#fff',
    },
    info: {
      main: '#2196f3', // блакитний
      light: '#64b5f6',
      dark: '#1976d2',
      contrastText: '#fff',
    },
    success: {
      main: '#4caf50', // зелений
      light: '#81c784',
      dark: '#388e3c',
      contrastText: '#fff',
    },
    text: {
      primary: '#333',
      secondary: '#666',
    },
    background: {
      default: '#f7f7f7',
    },
  },
});

export default theme;
