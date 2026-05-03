'use client';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/material/styles';

interface IconBtnProps {
  children: React.ReactNode;
  title?: string;
  danger?: boolean;
  onClick?: () => void;
  sx?: SxProps;
}

export default function IconBtn({ children, title, danger, onClick, sx }: IconBtnProps) {
  return (
    <Box
      component="button"
      title={title}
      onClick={onClick}
      sx={{
        width: 28, height: 28,
        borderRadius: '6px',
        border: '1.5px solid #D1D5DB',
        bgcolor: '#fff',
        cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#6B7280',
        transition: 'all 0.12s',
        flexShrink: 0,
        '&:hover': danger
          ? { borderColor: '#991B1B', color: '#991B1B', bgcolor: '#FEE2E2' }
          : { borderColor: '#6B7280', color: '#1A1C1E' },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
