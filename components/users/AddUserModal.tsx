'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import BaseModal from '@/components/common/BaseModal';
import FormField from '@/components/common/FormField';

interface AddUserModalProps { open: boolean; onClose: () => void; }

const pwdRules = ['Min 12 characters', 'Upper & lowercase letters', 'At least one number', 'At least one special character'];

export default function AddUserModal({ open, onClose }: AddUserModalProps) {
  return (
    <BaseModal open={open} onClose={onClose} title="Add Admin User" confirmLabel="Create User" onConfirm={onClose}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.75 }}>
        <FormField label="First Name" placeholder="First" />
        <FormField label="Last Name" placeholder="Last" />
      </Box>
      <FormField label="Email Address" placeholder="email@company.com" />
      <FormField label="Role">
        <Select fullWidth size="small" defaultValue="admin" sx={{ fontSize: 14 }}>
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="viewer">Viewer</MenuItem>
        </Select>
      </FormField>
      <Typography sx={{ fontSize: 11, fontWeight: 600, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.6px', mt: 2.25, mb: 1.25 }}>Set Password</Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.75 }}>
        <FormField label="Password" placeholder="Min. 12 characters" type="password" />
        <FormField label="Confirm Password" placeholder="Re-enter" type="password" />
      </Box>
      <Box sx={{ bgcolor: '#F9FAFB', borderRadius: '6px', p: '12px 14px' }}>
        {pwdRules.map((r) => (
          <Box key={r} sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: '4px', '&:last-child': { mb: 0 } }}>
            <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#D1D5DB', flexShrink: 0 }} />
            <Typography sx={{ fontSize: 12, color: '#6B7280' }}>{r}</Typography>
          </Box>
        ))}
      </Box>
    </BaseModal>
  );
}
