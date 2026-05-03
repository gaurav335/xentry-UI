import Box from '@mui/material/Box';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{
      // Fill the full dynamic viewport (accounts for mobile browser chrome)
      minHeight: '100vh',
      background: 'linear-gradient(145deg, #EBF3FC 0%, #F3F5F7 60%, #EBF3FC 100%)',
      // Center the card on every screen size — overflow: auto handles tall content
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflowY: 'auto',
      px: { xs: 1.5, sm: 2 },
      py: { xs: 3, sm: 4 },
    }}>
      {children}
    </Box>
  );
}
