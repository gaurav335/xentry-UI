'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Topbar from '@/components/layout/Topbar';
import DataTable, { Column, TableToolbar, SearchBar, FilterSelect } from '@/components/common/DataTable';
import StatusBadge from '@/components/ui/StatusBadge';
import IconBtn from '@/components/common/IconBtn';
import AddUserModal from './AddUserModal';

interface User { name: string; email: string; role: string; lastLogin: string; status: 'Active' | 'Inactive'; canDelete: boolean }

const users: User[] = [
  { name: 'Kathryn Smith', email: 'k.smith@delphiconstruction.com', role: 'Admin', lastLogin: 'Today, 8:42 AM', status: 'Active', canDelete: false },
  { name: 'Marcus Lee', email: 'm.lee@delphiconstruction.com', role: 'Admin', lastLogin: 'Mar 30, 2026', status: 'Active', canDelete: true },
  { name: 'Sandra Park', email: 's.park@delphiconstruction.com', role: 'Viewer', lastLogin: 'Mar 28, 2026', status: 'Inactive', canDelete: true },
];

const EditIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
const DeleteIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>;

const columns: Column<User>[] = [
  { key: 'name', label: 'Name', sortable: true, render: (r) => <Box sx={{ fontWeight: 500, color: '#1A1C1E' }}>{r.name}</Box> },
  { key: 'email', label: 'Email', sortable: true, render: (r) => <Box sx={{ fontFamily: '"DM Mono", monospace', fontSize: 12.5, color: '#3D4348' }}>{r.email}</Box> },
  { key: 'role', label: 'Role', render: (r) => <StatusBadge variant="blue" label={r.role} /> },
  { key: 'lastLogin', label: 'Last Login', render: (r) => <Box sx={{ color: '#6B7280' }}>{r.lastLogin}</Box> },
  { key: 'status', label: 'Status', render: (r) => <StatusBadge variant={r.status === 'Active' ? 'green' : 'amber'} label={r.status} dot={r.status === 'Active'} /> },
  { key: 'actions', label: 'Actions', render: (r) => (
    <Box sx={{ display: 'flex', gap: 0.75 }}>
      <IconBtn title="Edit"><EditIcon /></IconBtn>
      {r.canDelete && <IconBtn title="Delete" danger><DeleteIcon /></IconBtn>}
    </Box>
  )},
];

export default function UsersPage() {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <Topbar title="Admin Users — Delphi Construction">
        <Button variant="contained" onClick={() => setOpen(true)}
          startIcon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>}
          sx={{ bgcolor: '#002244', '&:hover': { bgcolor: '#001121' }, fontSize: 13, height: 34 }}>
          Add Admin User
        </Button>
      </Topbar>
      <Box sx={{ flex: 1, overflowY: 'auto', p: { xs: 1.5, sm: 2, md: 3 }, bgcolor: '#F9FAFB' }}>
        <DataTable
          columns={columns}
          rows={users}
          toolbar={
            <TableToolbar>
              <SearchBar placeholder="Search by name or email…" />
              <FilterSelect value="all" options={[{ value: 'all', label: 'All Roles' }, { value: 'admin', label: 'Admin' }, { value: 'viewer', label: 'Viewer' }]} />
            </TableToolbar>
          }
        />
      </Box>
      <AddUserModal open={open} onClose={() => setOpen(false)} />
    </Box>
  );
}
