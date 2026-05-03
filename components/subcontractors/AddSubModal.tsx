'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import BaseModal from '@/components/common/BaseModal';
import FormField from '@/components/common/FormField';

interface AddSubModalProps { open: boolean; onClose: () => void; }

export default function AddSubModal({ open, onClose }: AddSubModalProps) {
  const [cori, setCori] = useState(false);
  return (
    <BaseModal open={open} onClose={onClose} title="Add Subcontractor" confirmLabel="Add Subcontractor" onConfirm={onClose}>
      <FormField label="Company Name" placeholder="e.g. Northeast Plumbing Inc." hint="Subcontractor names don't need to be unique across tenants." />
      <FormField label="Trade / Specialty" placeholder="e.g. Plumbing, HVAC, Electrical…" />
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.75 }}>
        <FormField label="License Number" placeholder="e.g. CS-123456" hint="Alphanumeric · optional" />
        <FormField label="Phone Number" placeholder="e.g. 508-555-1212" />
      </Box>
      <FormField label="Procore Link" placeholder="e.g. https://app.procore.com/…" hint="Admins can click this link to open Procore in a new tab." />
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25, p: '12px 14px', border: '1.5px solid #D1D5DB', borderRadius: '6px', bgcolor: '#F9FAFB', cursor: 'pointer' }} onClick={() => setCori(!cori)}>
        <Checkbox checked={cori} onChange={() => setCori(!cori)} size="small" sx={{ p: 0, mt: '2px', color: '#D1D5DB', '&.Mui-checked': { color: '#1B4F8A' } }} />
        <Box>
          <Typography sx={{ fontSize: 13, fontWeight: 500, color: '#1A1C1E', mb: 0.25 }}>Display CORI message</Typography>
          <Typography sx={{ fontSize: 12, color: '#6B7280' }}>If checked, workers from this subcontractor will see a CORI form notice during account creation.</Typography>
        </Box>
      </Box>
    </BaseModal>
  );
}
