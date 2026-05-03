'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Topbar from '@/components/layout/Topbar';
import StatusBadge from '@/components/ui/StatusBadge';
import AddTenantModal from './AddTenantModal';

const tenants = [
  { initial: 'D', color: '#1B4F8A', name: 'Delphi Construction', info: '245 Washington St, Taunton, MA · Contact: K. Smith', projects: 14, workers: 218 },
  { initial: 'A', color: '#E8660A', name: 'Acme Construction', info: '88 Broad St, Boston, MA · Contact: T. Romano', projects: 6, workers: 84 },
];

export default function TenantsPage() {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <Topbar title="Manage Companies / Tenants">
        <Button variant="contained" onClick={() => setOpen(true)}
          startIcon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>}
          sx={{ bgcolor: '#002244', '&:hover': { bgcolor: '#001121' }, fontSize: 13, height: 34 }}>
          Add Tenant
        </Button>
      </Topbar>

      <Box sx={{ flex: 1, overflowY: 'auto', p: { xs: 1.5, sm: 2, md: 3 }, bgcolor: '#F9FAFB' }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 1.75 }}>
          {tenants.map((t) => (
            <Box key={t.name} sx={{ bgcolor: '#fff', border: '1.5px solid #D1D5DB', borderRadius: '10px', p: 2.25, cursor: 'pointer', transition: 'border-color 0.12s, box-shadow 0.12s', '&:hover': { borderColor: '#2A6BB5', boxShadow: '0 4px 14px rgba(27,79,138,0.1)' } }}>
              <Box sx={{ width: 40, height: 40, borderRadius: '6px', bgcolor: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 700, color: '#fff', mb: 1.5 }}>{t.initial}</Box>
              <Typography sx={{ fontSize: 15, fontWeight: 600, color: '#1A1C1E', mb: 0.5 }}>{t.name}</Typography>
              <Typography sx={{ fontSize: 12.5, color: '#6B7280', mb: 1.5 }}>{t.info}</Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box><Typography sx={{ fontSize: 16, fontWeight: 600, color: '#1A1C1E' }}>{t.projects}</Typography><Typography sx={{ fontSize: 12, color: '#6B7280' }}>Projects</Typography></Box>
                <Box><Typography sx={{ fontSize: 16, fontWeight: 600, color: '#1A1C1E' }}>{t.workers}</Typography><Typography sx={{ fontSize: 12, color: '#6B7280' }}>Workers</Typography></Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', pb: 0.25 }}><StatusBadge variant="green" label="Active" /></Box>
              </Box>
            </Box>
          ))}
          <Box onClick={() => setOpen(true)} sx={{ bgcolor: '#fff', border: '1.5px dashed #D1D5DB', borderRadius: '10px', p: 2.25, minHeight: 160, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', '&:hover': { borderColor: '#2A6BB5' } }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" style={{ marginBottom: 8 }}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            <Typography sx={{ fontSize: 13.5, color: '#6B7280', fontWeight: 500 }}>Add New Tenant</Typography>
          </Box>
        </Box>
      </Box>

      <AddTenantModal open={open} onClose={() => setOpen(false)} />
    </Box>
  );
}
