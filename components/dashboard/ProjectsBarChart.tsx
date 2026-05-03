import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SectionCard from '@/components/common/SectionCard';

const bars = [
  { label: 'JHS', h: 90, title: 'Johnson High School: 18' },
  { label: 'RMC', h: 65, title: 'Riverside Medical: 13' },
  { label: 'MH2', h: 55, title: 'Metro Housing: 11' },
  { label: 'NL',  h: 40, title: 'Northside Library: 8' },
  { label: 'EC',  h: 30, title: 'East Campus: 6' },
  { label: 'BC',  h: 15, title: 'Bay Clinic: 3' },
];

export default function ProjectsBarChart() {
  return (
    <SectionCard
      title="Active Projects by Workers"
      action={
        <Link href="/reports" style={{ textDecoration: 'none' }}>
          <Button variant="outlined" size="small" sx={{ fontSize: 12, height: 28, px: 1.25, borderColor: '#D1D5DB', color: '#3D4348' }}>View Reports</Button>
        </Link>
      }
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 0.75, height: 120 }}>
        {bars.map((bar) => (
          <Box key={bar.label} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5, flex: 1 }}>
            <Box sx={{ width: '100%', bgcolor: '#D6E8FA', borderRadius: '3px 3px 0 0', height: bar.h, minHeight: 4, '&:hover': { bgcolor: '#2A6BB5' }, cursor: 'pointer' }} title={bar.title} />
            <Typography sx={{ fontSize: 10, color: '#6B7280' }}>{bar.label}</Typography>
          </Box>
        ))}
      </Box>
      <Typography sx={{ fontSize: 11, color: '#6B7280', mt: 1 }}>Workers currently onsite per project</Typography>
    </SectionCard>
  );
}
