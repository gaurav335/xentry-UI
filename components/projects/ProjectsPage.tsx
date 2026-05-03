'use client';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Topbar from '@/components/layout/Topbar';
import DataTable, { Column, TableToolbar, SearchBar, FilterSelect } from '@/components/common/DataTable';
import StatusBadge from '@/components/ui/StatusBadge';
import IconBtn from '@/components/common/IconBtn';

interface Project { name: string; code: string; address: string; workers: number; subs: number; active: boolean }

const projects: Project[] = [
  { name: 'Johnson High School', code: 'JS-453-XX', address: '45 Oak St, Taunton, MA', workers: 38, subs: 6, active: true },
  { name: 'Riverside Medical Center', code: 'RM-210-B', address: '800 Main St, Brockton, MA', workers: 52, subs: 9, active: true },
  { name: 'Metro Housing Phase 2', code: 'MH-118-P2', address: '12 Canal St, Boston, MA', workers: 29, subs: 5, active: true },
  { name: 'East Campus Renovation', code: 'EC-099-R', address: '3 College Ave, Easton, MA', workers: 0, subs: 3, active: false },
];

const EditIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
const MinusIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg>;

const columns: Column<Project>[] = [
  { key: 'name', label: 'Project Name', sortable: true, render: (r) => <Box sx={{ fontWeight: 500, color: '#1A1C1E' }}>{r.name}</Box> },
  { key: 'code', label: 'Code', render: (r) => <Box sx={{ fontFamily: '"DM Mono", monospace', fontSize: 12.5, color: '#3D4348' }}>{r.code}</Box> },
  { key: 'address', label: 'Address', render: (r) => <Box sx={{ color: '#6B7280' }}>{r.address}</Box> },
  { key: 'workers', label: 'Workers' },
  { key: 'subs', label: 'Subs' },
  { key: 'status', label: 'Status', render: (r) => <StatusBadge variant={r.active ? 'green' : 'gray'} label={r.active ? 'Active' : 'Inactive'} dot={r.active} /> },
  { key: 'actions', label: 'Actions', render: (r) => (
    <Box sx={{ display: 'flex', gap: 0.75 }}>
      <Link href="/projects/edit" style={{ textDecoration: 'none' }}><IconBtn title="Edit"><EditIcon /></IconBtn></Link>
      {r.active && <IconBtn title="Deactivate" danger><MinusIcon /></IconBtn>}
    </Box>
  )},
];

export default function ProjectsPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <Topbar title="Manage Projects">
        <Link href="/projects/edit" style={{ textDecoration: 'none' }}>
          <Button variant="contained"
            startIcon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>}
            sx={{ bgcolor: '#002244', '&:hover': { bgcolor: '#001121' }, fontSize: 13, height: 34 }}>
            Add Project
          </Button>
        </Link>
      </Topbar>
      <Box sx={{ flex: 1, overflowY: 'auto', p: { xs: 1.5, sm: 2, md: 3 }, bgcolor: '#F9FAFB' }}>
        <DataTable
          columns={columns}
          rows={projects}
          getRowOpacity={(r) => (r.active ? 1 : 0.6)}
          toolbar={
            <TableToolbar>
              <SearchBar placeholder="Search projects…" />
              <FilterSelect value="active" options={[{ value: 'active', label: 'Active Projects' }, { value: 'inactive', label: 'Inactive Projects' }, { value: 'all', label: 'All Projects' }]} />
              <Typography sx={{ ml: 'auto', fontSize: 13, color: '#6B7280' }}>14 projects</Typography>
            </TableToolbar>
          }
          pageInfo="Showing 4 of 14 projects"
          totalPages={2}
        />
      </Box>
    </Box>
  );
}
