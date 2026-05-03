'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Topbar from '@/components/layout/Topbar';
import DataTable, { Column, TableToolbar, SearchBar } from '@/components/common/DataTable';
import StatusBadge from '@/components/ui/StatusBadge';
import IconBtn from '@/components/common/IconBtn';
import AddSubModal from './AddSubModal';

interface Sub { name: string; trade: string; license: string; phone: string; cori: boolean; projects: number; workers: number }

const subs: Sub[] = [
  { name: 'Northeast Plumbing Inc.', trade: 'Plumbing', license: 'CS-118432', phone: '(508) 555-0190', cori: true, projects: 4, workers: 22 },
  { name: 'Beacon HVAC Systems', trade: 'HVAC', license: 'HV-204851', phone: '(617) 555-0327', cori: false, projects: 3, workers: 18 },
  { name: 'Atlas Electrical Co.', trade: 'Electrical', license: 'EL-991207', phone: '(781) 555-0614', cori: true, projects: 6, workers: 34 },
  { name: 'Bay State Masonry', trade: 'Masonry', license: '—', phone: '(508) 555-0745', cori: false, projects: 2, workers: 11 },
];

const EditIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
const DeleteIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg>;

export default function SubcontractorsPage() {
  const [open, setOpen] = useState(false);

  const columns: Column<Sub>[] = [
    { key: 'name', label: 'Company Name', sortable: true, render: (r) => <Box sx={{ fontWeight: 500, color: '#1A1C1E' }}>{r.name}</Box> },
    { key: 'trade', label: 'Trade / Specialty', render: (r) => <Box sx={{ color: '#6B7280' }}>{r.trade}</Box> },
    { key: 'license', label: 'License #', render: (r) => <Box sx={{ fontFamily: '"DM Mono", monospace', fontSize: 12.5, color: '#3D4348' }}>{r.license}</Box> },
    { key: 'phone', label: 'Phone', render: (r) => <Box sx={{ fontFamily: '"DM Mono", monospace', fontSize: 12.5, color: '#3D4348' }}>{r.phone}</Box> },
    { key: 'cori', label: 'CORI', render: (r) => <StatusBadge variant={r.cori ? 'amber' : 'gray'} label={r.cori ? 'Required' : '—'} /> },
    { key: 'projects', label: 'Active Projects' },
    { key: 'workers', label: 'Workers' },
    { key: 'actions', label: 'Actions', render: () => (
      <Box sx={{ display: 'flex', gap: 0.75 }}>
        <IconBtn title="Edit" onClick={() => setOpen(true)}><EditIcon /></IconBtn>
        <IconBtn title="Delete" danger><DeleteIcon /></IconBtn>
      </Box>
    )},
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <Topbar title="Subcontractors">
        <Button variant="contained" onClick={() => setOpen(true)}
          startIcon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>}
          sx={{ bgcolor: '#002244', '&:hover': { bgcolor: '#001121' }, fontSize: 13, height: 34 }}>
          Add Subcontractor
        </Button>
      </Topbar>
      <Box sx={{ flex: 1, overflowY: 'auto', p: { xs: 1.5, sm: 2, md: 3 }, bgcolor: '#F9FAFB' }}>
        <DataTable
          columns={columns} rows={subs}
          toolbar={
            <TableToolbar>
              <SearchBar placeholder="Search subcontractors…" />
              <Typography sx={{ ml: 'auto', fontSize: 13, color: '#6B7280' }}>31 subcontractors</Typography>
            </TableToolbar>
          }
          pageInfo="Showing 4 of 31 subcontractors"
          totalPages={2}
        />
      </Box>
      <AddSubModal open={open} onClose={() => setOpen(false)} />
    </Box>
  );
}
