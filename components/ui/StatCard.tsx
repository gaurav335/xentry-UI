import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface StatCardProps {
  label: string;
  value: string | number;
  delta?: string;
  valueColor?: string;
}

export default function StatCard({ label, value, delta, valueColor }: StatCardProps) {
  return (
    <Box sx={{
      bgcolor: '#fff', border: '1.5px solid #D1D5DB',
      borderRadius: '10px', p: '16px 18px',
    }}>
      <Typography sx={{ fontSize: 12, color: '#6B7280', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.4px', mb: '6px' }}>
        {label}
      </Typography>
      <Typography sx={{ fontSize: 26, fontWeight: 600, color: valueColor || '#1A1C1E', lineHeight: 1, mb: '4px' }}>
        {value}
      </Typography>
      {delta && (
        <Typography sx={{ fontSize: 12, color: '#166534' }}>{delta}</Typography>
      )}
    </Box>
  );
}
