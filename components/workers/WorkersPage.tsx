'use client';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Topbar from '@/components/layout/Topbar';
import DataTable, { Column, TableToolbar, SearchBar, FilterSelect } from '@/components/common/DataTable';
import StatusBadge from '@/components/ui/StatusBadge';
import IconBtn from '@/components/common/IconBtn';

interface Worker { name: string; phone: string; projects: number; sub: string; osha: string; status: string; active: boolean }

const workers: Worker[] = [
  { name: 'Carlos Martinez', phone: '(508) 555-0183', projects: 2, sub: 'Northeast Plumbing', osha: 'OSHA-10', status: 'Onsite', active: true },
  { name: 'Maria Torres', phone: '(617) 555-0829', projects: 1, sub: 'Atlas Electrical', osha: 'Expired', status: 'Offsite', active: true },
  { name: 'James Park', phone: '(781) 555-0294', projects: 3, sub: 'Beacon HVAC', osha: 'OSHA-30', status: 'Onsite', active: true },
  { name: 'Devon Okafor', phone: '(508) 555-0311', projects: 0, sub: '—', osha: 'None', status: 'Deleted', active: false },
];

const ViewIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>;
const DeleteIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg>;

const columns: Column<Worker>[] = [
  { key: 'name', label: 'Name', sortable: true, render: (r) => (
    <Link href="/workers/1" style={{ textDecoration: 'none', fontWeight: 500, color: '#1A1C1E' }}>{r.name}</Link>
  )},
  { key: 'phone', label: 'Phone', render: (r) => <Box sx={{ fontFamily: '"DM Mono", monospace', fontSize: 12.5, color: '#3D4348' }}>{r.phone}</Box> },
  { key: 'projects', label: 'Projects', render: (r) => <StatusBadge variant={r.projects > 0 ? 'blue' : 'gray'} label={`${r.projects} project${r.projects !== 1 ? 's' : ''}`} /> },
  { key: 'sub', label: 'Subcontractor', render: (r) => <Box sx={{ color: '#6B7280' }}>{r.sub}</Box> },
  { key: 'osha', label: 'OSHA', render: (r) => <StatusBadge variant={r.osha.includes('OSHA') ? 'green' : r.osha === 'Expired' ? 'amber' : 'gray'} label={r.osha} /> },
  { key: 'status', label: 'Status', render: (r) => <StatusBadge variant={r.status === 'Onsite' ? 'green' : r.status === 'Deleted' ? 'red' : 'gray'} label={r.status} dot={r.status === 'Onsite'} /> },
  { key: 'actions', label: 'Actions', render: (r) => (
    <Box sx={{ display: 'flex', gap: 0.75 }}>
      <Link href="/workers/1" style={{ textDecoration: 'none' }}><IconBtn title="View"><ViewIcon /></IconBtn></Link>
      {r.active && <IconBtn title="Delete" danger><DeleteIcon /></IconBtn>}
    </Box>
  )},
];

export default function WorkersPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <Topbar title="Worker Management">
        <Button variant="contained"
          startIcon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>}
          sx={{ bgcolor: '#002244', '&:hover': { bgcolor: '#001121' }, fontSize: 13, height: 34 }}>
          Add Worker
        </Button>
      </Topbar>
      <Box sx={{ flex: 1, overflowY: 'auto', p: { xs: 1.5, sm: 2, md: 3 }, bgcolor: '#F9FAFB' }}>
        <DataTable
          columns={columns}
          rows={workers}
          getRowOpacity={(r) => (r.active ? 1 : 0.6)}
          toolbar={
            <TableToolbar>
              <SearchBar placeholder="Search by name or phone…" />
              <FilterSelect value="all" options={[{ value: 'all', label: 'All Workers' }, { value: 'onsite', label: 'Currently Onsite' }, { value: 'inactive', label: 'Inactive' }]} />
              <FilterSelect value="all" options={[{ value: 'all', label: 'All Projects' }, { value: 'jhs', label: 'Johnson High School' }, { value: 'rmc', label: 'Riverside Medical' }]} />
              <Typography sx={{ ml: 'auto', fontSize: 13, color: '#6B7280' }}>218 workers</Typography>
            </TableToolbar>
          }
          pageInfo="Showing 4 of 218 workers"
          totalPages={3}
        />
      </Box>
    </Box>
  );
}
