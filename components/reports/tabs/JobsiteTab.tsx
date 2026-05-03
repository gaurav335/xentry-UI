import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DataTable, { Column, FilterSelect } from '@/components/common/DataTable';
import StatusBadge from '@/components/ui/StatusBadge';

interface JobsiteRow { worker: string; sub: string; checkIn: string; checkOut: string; method: string; total: string; totalColor: string }

const rows: JobsiteRow[] = [
  { worker: 'Carlos Martinez', sub: 'Northeast Plumbing', checkIn: 'Mar 31 · 7:52 AM', checkOut: '—', method: 'Geofence', total: 'Onsite now', totalColor: '#166534' },
  { worker: 'Maria Torres', sub: 'Atlas Electrical', checkIn: 'Mar 31 · 6:14 AM', checkOut: 'Mar 31 · 10:02 AM', method: 'Manual', total: '3h 48m', totalColor: '#1A1C1E' },
  { worker: 'James Park', sub: 'Beacon HVAC', checkIn: 'Mar 30 · 7:00 AM', checkOut: 'Mar 30 · 4:45 PM', method: 'Geofence', total: '9h 45m', totalColor: '#1A1C1E' },
  { worker: 'Maria Torres', sub: 'Atlas Electrical', checkIn: 'Mar 30 · 6:30 AM', checkOut: 'Mar 30 · 2:15 PM', method: 'Geofence', total: '7h 45m', totalColor: '#1A1C1E' },
];

const DownloadIcon = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;

const columns: Column<JobsiteRow>[] = [
  { key: 'worker', label: 'Worker', render: (r) => <Box sx={{ fontWeight: 500, color: '#1A1C1E' }}>{r.worker}</Box> },
  { key: 'sub', label: 'Subcontractor', render: (r) => <Box sx={{ color: '#6B7280' }}>{r.sub}</Box> },
  { key: 'checkIn', label: 'Check-In', render: (r) => <Box sx={{ fontFamily: '"DM Mono", monospace', fontSize: 12.5 }}>{r.checkIn}</Box> },
  { key: 'checkOut', label: 'Check-Out', render: (r) => <Box sx={{ fontFamily: '"DM Mono", monospace', fontSize: 12.5 }}>{r.checkOut}</Box> },
  { key: 'method', label: 'Method', render: (r) => <StatusBadge variant={r.method === 'Geofence' ? 'blue' : 'gray'} label={r.method} /> },
  { key: 'total', label: 'Total Time', render: (r) => <Box sx={{ fontWeight: 500, color: r.totalColor }}>{r.total}</Box> },
];

function FilterLabel({ children }: { children: React.ReactNode }) {
  return <Typography sx={{ fontSize: 12, fontWeight: 500, color: '#3D4348', mb: 0.625 }}>{children}</Typography>;
}

export default function JobsiteTab() {
  return (
    <>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: 1.75, p: { xs: 1.5, sm: 2.25 }, borderBottom: '1px solid #D1D5DB' }}>
        <Box><FilterLabel>Project</FilterLabel><FilterSelect value="jhs" minWidth={200} options={[{ value: 'jhs', label: 'Johnson High School' }, { value: 'rmc', label: 'Riverside Medical Center' }, { value: 'all', label: '— Show All —' }]} /></Box>
        <Box><FilterLabel>Date Range</FilterLabel><input type="date" defaultValue="2026-03-01" style={{ height: 34, padding: '0 10px', border: '1.5px solid #D1D5DB', borderRadius: 6, fontFamily: 'inherit', fontSize: 13, color: '#3D4348', background: '#F9FAFB', outline: 'none' }} /></Box>
        <Typography sx={{ fontSize: 13, color: '#6B7280', pb: 0.5 }}>to</Typography>
        <Box><input type="date" defaultValue="2026-03-31" style={{ height: 34, padding: '0 10px', border: '1.5px solid #D1D5DB', borderRadius: 6, fontFamily: 'inherit', fontSize: 13, color: '#3D4348', background: '#F9FAFB', outline: 'none' }} /></Box>
        <Box><FilterLabel>Status</FilterLabel><FilterSelect value="active" options={[{ value: 'active', label: 'Active Projects' }, { value: 'all', label: 'All' }]} /></Box>
        <Box sx={{ ml: 'auto', display: 'flex', gap: 1, alignSelf: 'flex-end' }}>
          <Button variant="outlined" startIcon={<DownloadIcon />} sx={{ borderColor: '#D1D5DB', color: '#3D4348', fontSize: 13, height: 34 }}>Excel</Button>
          <Button variant="outlined" sx={{ borderColor: '#D1D5DB', color: '#3D4348', fontSize: 13, height: 34 }}>CSV</Button>
          <Button variant="outlined" sx={{ borderColor: '#D1D5DB', color: '#3D4348', fontSize: 13, height: 34 }}>PDF</Button>
        </Box>
      </Box>
      <DataTable columns={columns} rows={rows} pageInfo="148 entries · Mar 1–31, 2026" totalPages={3} />
    </>
  );
}
