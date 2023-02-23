import { Box, CircularProgress } from '@mui/material';

export default function Loader() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        position: 'absolute',
      }}
    >
      <CircularProgress />
    </Box>
  );
}
