import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DataTable, { Column, FilterSelect } from '@/components/common/DataTable';
import StatCard from '@/components/ui/StatCard';
import StatusBadge from '@/components/ui/StatusBadge';

interface WorkerRow { date: string; project: string; checkIn: string; checkOut: string; method: string; hours: string; hoursColor: string }

const rows: WorkerRow[] = [
  { date: 'Mar 31', project: 'Johnson High School', checkIn: '7:52 AM', checkOut: '—', method: 'Geofence', hours: 'Onsite', hoursColor: '#166534' },
  { date: 'Mar 30', project: 'Riverside Medical', checkIn: '6:08 AM', checkOut: '5:50 PM', method: 'Geofence', hours: '11h 42m', hoursColor: '#1A1C1E' },
  { date: 'Mar 29', project: 'Johnson High School', checkIn: '7:14 AM', checkOut: '3:30 PM', method: 'Manual', hours: '8h 16m', hoursColor: '#1A1C1E' },
];

const columns: Column<WorkerRow>[] = [
  { key: 'date', label: 'Date', render: (r) => <Box sx={{ fontFamily: '"DM Mono", monospace', fontSize: 12.5 }}>{r.date}</Box> },
  { key: 'project', label: 'Project', render: (r) => <Box sx={{ color: '#6B7280' }}>{r.project}</Box> },
  { key: 'checkIn', label: 'Check-In', render: (r) => <Box sx={{ fontFamily: '"DM Mono", monospace', fontSize: 12.5 }}>{r.checkIn}</Box> },
  { key: 'checkOut', label: 'Check-Out', render: (r) => <Box sx={{ fontFamily: '"DM Mono", monospace', fontSize: 12.5 }}>{r.checkOut}</Box> },
  { key: 'method', label: 'Method', render: (r) => <StatusBadge variant={r.method === 'Geofence' ? 'blue' : 'gray'} label={r.method} /> },
  { key: 'hours', label: 'Hours', render: (r) => <Box sx={{ fontWeight: 500, color: r.hoursColor }}>{r.hours}</Box> },
];

export default function WorkerTab() {
  return (
    <>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: 1.75, p: { xs: 1.5, sm: 2.25 }, borderBottom: '1px solid #D1D5DB' }}>
        <Box>
          <Typography sx={{ fontSize: 12, fontWeight: 500, color: '#3D4348', mb: 0.625 }}>Worker</Typography>
          <FilterSelect value="carlos" minWidth={200} options={[{ value: 'carlos', label: 'Carlos Martinez' }, { value: 'james', label: 'James Park' }, { value: 'maria', label: 'Maria Torres' }]} />
        </Box>
        <Box>
          <Typography sx={{ fontSize: 12, fontWeight: 500, color: '#3D4348', mb: 0.625 }}>Date From</Typography>
          <input type="date" defaultValue="2026-03-01" style={{ height: 34, padding: '0 10px', border: '1.5px solid #D1D5DB', borderRadius: 6, fontFamily: 'inherit', fontSize: 13, color: '#3D4348', background: '#F9FAFB', outline: 'none' }} />
        </Box>
        <Box>
          <Typography sx={{ fontSize: 12, fontWeight: 500, color: '#3D4348', mb: 0.625 }}>Date To</Typography>
          <input type="date" defaultValue="2026-03-31" style={{ height: 34, padding: '0 10px', border: '1.5px solid #D1D5DB', borderRadius: 6, fontFamily: 'inherit', fontSize: 13, color: '#3D4348', background: '#F9FAFB', outline: 'none' }} />
        </Box>
        <Box sx={{ ml: 'auto', display: 'flex', gap: 1, alignSelf: 'flex-end' }}>
          <Button variant="outlined" sx={{ borderColor: '#D1D5DB', color: '#3D4348', fontSize: 13, height: 34 }}>Excel</Button>
          <Button variant="outlined" sx={{ borderColor: '#D1D5DB', color: '#3D4348', fontSize: 13, height: 34 }}>CSV</Button>
          <Button variant="outlined" sx={{ borderColor: '#D1D5DB', color: '#3D4348', fontSize: 13, height: 34 }}>PDF</Button>
        </Box>
      </Box>
      <Box sx={{ p: { xs: 1.5, sm: 2.25 }, borderBottom: '1px solid #D1D5DB' }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 1.75 }}>
          <StatCard label="Total Days Onsite" value={18} />
          <StatCard label="Total Hours" value={142} />
          <StatCard label="Avg Daily Hours" value={7.9} />
        </Box>
      </Box>
      <DataTable columns={columns} rows={rows} pageInfo="18 entries for Carlos Martinez" />
    </>
  );
}
