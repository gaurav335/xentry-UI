import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 2 }}>
      {items.map((item, i) => (
        <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
          {i > 0 && <Typography sx={{ color: '#D1D5DB', fontSize: 13 }}>›</Typography>}
          {item.href ? (
            <Link href={item.href} style={{ color: '#1B4F8A', textDecoration: 'none', fontSize: 13 }}>
              {item.label}
            </Link>
          ) : (
            <Typography sx={{ fontSize: 13, color: '#6B7280' }}>{item.label}</Typography>
          )}
        </Box>
      ))}
    </Box>
  );
}
