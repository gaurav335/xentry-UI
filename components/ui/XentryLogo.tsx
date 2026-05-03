import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface XentryLogoProps {
  size?: 'sm' | 'md';
}

export default function XentryLogo({ size = 'md' }: XentryLogoProps) {
  const markSize = size === 'sm' ? 32 : 38;
  const fontSize = size === 'sm' ? 15 : 20;
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
      <Box sx={{
        width: markSize, height: markSize,
        background: '#002244',
        borderRadius: '6px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <svg width={markSize * 0.58} height={markSize * 0.58} viewBox="0 0 24 24" fill="none" stroke="#00BFA5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          <circle cx="12" cy="9" r="2.5" fill="#00BFA5" stroke="none"/>
        </svg>
      </Box>
      <Typography sx={{ fontSize, fontWeight: 800, color: '#1A1C1E', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        X<span style={{ color: '#00BFA5' }}>ENTRY</span>
      </Typography>
    </Box>
  );
}
