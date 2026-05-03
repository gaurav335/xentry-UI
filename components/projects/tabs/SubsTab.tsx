import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DataTable, { Column } from '@/components/common/DataTable';
import StatusBadge from '@/components/ui/StatusBadge';
import IconBtn from '@/components/common/IconBtn';

interface SubRow { name: string; pins: string[]; workers: number }
const RemoveIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;

const subs: SubRow[] = [
  { name: 'Northeast Plumbing Inc.', pins: ['8812', '4457'], workers: 11 },
  { name: 'Beacon HVAC Systems', pins: ['3301'], workers: 8 },
];

const columns: Column<SubRow>[] = [
  { key: 'name', label: 'Subcontractor', render: (r) => <Box sx={{ fontWeight: 500, color: '#1A1C1E' }}>{r.name}</Box> },
  { key: 'pins', label: 'PINs', render: (r) => (
    <Box sx={{ display: 'flex', gap: 0.625, flexWrap: 'wrap', alignItems: 'center' }}>
      {r.pins.map((p) => <StatusBadge key={p} variant="gray" label={p} />)}
      <Button size="small" variant="outlined" sx={{ fontSize: 11, height: 22, px: 0.875, minWidth: 0, borderColor: '#D1D5DB', color: '#3D4348' }}>+ PIN</Button>
    </Box>
  )},
  { key: 'workers', label: 'Workers', render: (r) => <Box sx={{ color: '#6B7280' }}>{r.workers}</Box> },
  { key: 'actions', label: '', render: () => <IconBtn title="Remove" danger><RemoveIcon /></IconBtn> },
];

export default function SubsTab() {
  return (
    <Box sx={{ p: 2.5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.75 }}>
        <Typography sx={{ fontSize: 13.5, color: '#3D4348' }}>6 subcontractors on this project</Typography>
        <Button variant="contained" size="small" sx={{ bgcolor: '#002244', '&:hover': { bgcolor: '#001121' }, fontSize: 12, height: 28, px: 1.25 }}>Add Subcontractor</Button>
      </Box>
      <DataTable columns={columns} rows={subs} />
    </Box>
  );
}
