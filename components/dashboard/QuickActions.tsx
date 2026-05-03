import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SectionCard from '@/components/common/SectionCard';

const actions = [
  { label: 'Add New Project', href: '/projects/edit', color: undefined },
  { label: 'Add Worker', href: '/workers', color: undefined },
  { label: 'View Live Roll Call', href: '/rollcall', color: '#166534' },
];

export default function QuickActions() {
  return (
    <SectionCard title="Quick Actions">
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {actions.map((a) => (
          <Link key={a.href} href={a.href} style={{ textDecoration: 'none' }}>
            <Button fullWidth variant="outlined"
              sx={{ justifyContent: 'flex-start', borderColor: '#D1D5DB', color: a.color ?? '#3D4348', fontSize: 13, height: 36, '&:hover': { borderColor: a.color ?? '#6B7280' } }}>
              {a.label}
            </Button>
          </Link>
        ))}
      </Box>
    </SectionCard>
  );
}
