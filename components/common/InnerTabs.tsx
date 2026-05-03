'use client';
import Box from '@mui/material/Box';

export interface TabItem {
  key: string;
  label: string;
}

interface InnerTabsProps {
  tabs: TabItem[];
  active: string;
  onChange: (key: string) => void;
}

export default function InnerTabs({ tabs, active, onChange }: InnerTabsProps) {
  return (
    <Box sx={{
      display: 'flex',
      borderBottom: '1.5px solid #D1D5DB',
      bgcolor: '#fff',
      overflowX: 'auto',           // scroll tabs horizontally on narrow screens
      WebkitOverflowScrolling: 'touch',
      // Hide scrollbar visually but keep it functional
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': { display: 'none' },
    }}>
      {tabs.map((t) => (
        <Box
          key={t.key}
          onClick={() => onChange(t.key)}
          sx={{
            px: { xs: 1.5, sm: 2.25 },
            py: 1.375,
            fontSize: { xs: 13, sm: 13.5 },
            fontWeight: 500,
            color: active === t.key ? '#1B4F8A' : '#6B7280',
            cursor: 'pointer',
            borderBottom: '2.5px solid',
            borderBottomColor: active === t.key ? '#1B4F8A' : 'transparent',
            mb: '-1.5px',
            transition: 'all 0.12s',
            whiteSpace: 'nowrap',   // prevent tab labels from wrapping
            '&:hover': { color: '#3D4348' },
          }}
        >
          {t.label}
        </Box>
      ))}
    </Box>
  );
}
