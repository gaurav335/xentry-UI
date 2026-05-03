'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Topbar from '@/components/layout/Topbar';
import StatCard from '@/components/ui/StatCard';
import LiveCheckIns from './LiveCheckIns';
import ProjectsBarChart from './ProjectsBarChart';
import QuickActions from './QuickActions';

const stats = [
  { label: 'Active Projects', value: 14, delta: '2 added this month' },
  { label: 'Workers Onsite Now', value: 47, valueColor: '#166534', delta: 'Across 6 sites' },
  { label: 'Total Workers', value: 218, delta: '+12 this week' },
  { label: 'Subcontractors', value: 31, delta: 'Active on projects' },
];

export default function DashboardPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <Topbar title="Dashboard">
        <Typography sx={{ fontSize: 13, color: '#6B7280', display: { xs: 'none', sm: 'block' } }}>
          Tue, Mar 31, 2026 · 8:42 AM
        </Typography>
      </Topbar>

      <Box sx={{ flex: 1, overflowY: 'auto', p: { xs: 1.5, sm: 2, md: 3 }, bgcolor: '#F9FAFB' }}>
        {/* Stats: 2 cols on mobile, 4 on desktop */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: { xs: 1.25, sm: 1.75 }, mb: { xs: 2, md: 3 } }}>
          {stats.map((s) => <StatCard key={s.label} {...s} />)}
        </Box>

        {/* Two-column: stacks on mobile */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 2 }}>
          <Box><LiveCheckIns /></Box>
          <Box>
            <ProjectsBarChart />
            <QuickActions />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
