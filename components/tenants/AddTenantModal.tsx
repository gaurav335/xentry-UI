'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BaseModal from '@/components/common/BaseModal';
import FormField from '@/components/common/FormField';

interface AddTenantModalProps { open: boolean; onClose: () => void; }

export default function AddTenantModal({ open, onClose }: AddTenantModalProps) {
  return (
    <BaseModal open={open} onClose={onClose} title="Add New Tenant" confirmLabel="Create Tenant" onConfirm={onClose}>
      <FormField label="Company Name" placeholder="e.g. Northeast Builders LLC" />
      <FormField label="Company Address" placeholder="123 Main Street, City, State ZIP" />
      <Typography sx={{ fontSize: 11, fontWeight: 600, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.6px', mt: 2.25, mb: 1.25 }}>Primary Contact</Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.75 }}>
        <FormField label="First Name" placeholder="First" />
        <FormField label="Last Name" placeholder="Last" />
        <FormField label="Contact Phone" placeholder="(555) 000-0000" />
        <FormField label="Contact Email" placeholder="email@company.com" />
      </Box>
    </BaseModal>
  );
}
