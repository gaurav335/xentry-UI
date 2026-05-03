import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface SectionCardProps {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  noPadding?: boolean;
  sx?: object;
}

export default function SectionCard({ title, action, children, noPadding, sx }: SectionCardProps) {
  return (
    <Box sx={{ bgcolor: '#fff', border: '1.5px solid #D1D5DB', borderRadius: '10px', overflow: 'hidden', mb: 2, ...sx }}>
      <Box sx={{ px: 2.25, py: 1.75, borderBottom: '1px solid #D1D5DB', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#1A1C1E' }}>{title}</Typography>
        {action}
      </Box>
      {noPadding ? children : <Box sx={{ p: '16px 18px' }}>{children}</Box>}
    </Box>
  );
}
