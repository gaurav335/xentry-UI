'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useSidebar } from './SidebarContext';

const HamburgerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

interface TopbarProps {
  title: string;
  children?: React.ReactNode;
  subtitle?: React.ReactNode;
}

export default function Topbar({ title, children, subtitle }: TopbarProps) {
  const { openDrawer } = useSidebar();

  return (
    <Box sx={{
      height: 58,
      borderBottom: '1px solid #D1D5DB',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      px: { xs: 2, sm: 3 },
      bgcolor: '#fff',
      flexShrink: 0,
      gap: 1,
      // Never wrap — title truncates, actions stay on the same row always
      flexWrap: 'nowrap',
      overflow: 'hidden',
    }}>
      {/* Left: hamburger (mobile only) + title */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 0, flex: '1 1 0' }}>
        <IconButton
          onClick={openDrawer}
          size="small"
          aria-label="Open menu"
          sx={{ display: { xs: 'inline-flex', md: 'none' }, color: '#3D4348', flexShrink: 0, p: 0.5 }}
        >
          <HamburgerIcon />
        </IconButton>
        <Box sx={{ minWidth: 0 }}>
          <Typography sx={{
            fontSize: { xs: 14, sm: 16 },
            fontWeight: 600,
            color: '#1A1C1E',
            lineHeight: 1,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
            {title}
          </Typography>
          {subtitle && <Box sx={{ mt: 0.25 }}>{subtitle}</Box>}
        </Box>
      </Box>

      {/* Right: action buttons — fixed width, never wraps */}
      {children && (
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 0.75, sm: 1 },
          flexShrink: 0,
        }}>
          {children}
        </Box>
      )}
    </Box>
  );
}
