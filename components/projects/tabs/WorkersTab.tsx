import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DataTable, { Column } from '@/components/common/DataTable';
import IconBtn from '@/components/common/IconBtn';

interface ProjectWorker { name: string; phone: string; sub: string; last: string }
const RemoveIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;

const workers: ProjectWorker[] = [
  { name: 'Carlos Martinez', phone: '(508) 555-0183', sub: 'Northeast Plumbing', last: 'Today' },
  { name: 'James Park', phone: '(617) 555-0294', sub: 'Beacon HVAC', last: 'Mar 30' },
  { name: 'Tanya Reynolds', phone: '(781) 555-0047', sub: 'Atlas Electrical', last: 'Mar 29' },
];

const columns: Column<ProjectWorker>[] = [
  { key: 'name', label: 'Name', render: (r) => <Box sx={{ fontWeight: 500, color: '#1A1C1E' }}>{r.name}</Box> },
  { key: 'phone', label: 'Phone', render: (r) => <Box sx={{ fontFamily: '"DM Mono", monospace', fontSize: 12.5, color: '#3D4348' }}>{r.phone}</Box> },
  { key: 'sub', label: 'Subcontractor', render: (r) => <Box sx={{ color: '#6B7280' }}>{r.sub}</Box> },
  { key: 'last', label: 'Last Onsite', render: (r) => <Box sx={{ color: '#6B7280' }}>{r.last}</Box> },
  { key: 'actions', label: '', render: () => <IconBtn title="Remove" danger><RemoveIcon /></IconBtn> },
];

export default function WorkersTab() {
  return (
    <Box sx={{ p: 2.5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.75 }}>
        <Typography sx={{ fontSize: 13.5, color: '#3D4348' }}>38 workers assigned to this project</Typography>
        <Button variant="contained" size="small" sx={{ bgcolor: '#002244', '&:hover': { bgcolor: '#001121' }, fontSize: 12, height: 28, px: 1.25 }}>Assign Worker</Button>
      </Box>
      <DataTable columns={columns} rows={workers} />
    </Box>
  );
}
