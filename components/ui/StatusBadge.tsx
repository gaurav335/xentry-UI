import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

type BadgeVariant = 'green' | 'red' | 'amber' | 'blue' | 'gray';

interface StatusBadgeProps {
  variant: BadgeVariant;
  label: string;
  dot?: boolean;
}

const variantStyles: Record<BadgeVariant, { bg: string; color: string }> = {
  green: { bg: '#DCFCE7', color: '#166534' },
  red: { bg: '#FEE2E2', color: '#991B1B' },
  amber: { bg: '#FEF3C7', color: '#92400E' },
  blue: { bg: '#D6E8FA', color: '#1B4F8A' },
  gray: { bg: '#F3F5F7', color: '#3D4348' },
};

export default function StatusBadge({ variant, label, dot }: StatusBadgeProps) {
  const { bg, color } = variantStyles[variant];
  return (
    <Box component="span" sx={{
      display: 'inline-flex', alignItems: 'center', gap: '5px',
      px: '9px', py: '3px',
      borderRadius: '20px',
      fontSize: 11.5, fontWeight: 500, lineHeight: 1,
      bgcolor: bg, color,
      whiteSpace: 'nowrap',
    }}>
      {dot && <Box component="span" sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: color, flexShrink: 0 }} />}
      {label}
    </Box>
  );
}
