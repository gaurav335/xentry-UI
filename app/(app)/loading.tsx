import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function AppLoading() {
  return (
    <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', bgcolor: '#F9FAFB' }}>
      <CircularProgress size={32} sx={{ color: '#00BFA5' }} />
    </Box>
  );
}
