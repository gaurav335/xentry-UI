import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function AuthLoading() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <CircularProgress size={32} sx={{ color: '#00BFA5' }} />
    </Box>
  );
}
