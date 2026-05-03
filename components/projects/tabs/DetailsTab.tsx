import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import FormField from '@/components/common/FormField';

export default function DetailsTab() {
  return (
    <Box sx={{ p: 2.5 }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.75 }}>
        <FormField label="Project Name" defaultValue="Johnson High School" />
        <FormField label="Project Code" defaultValue="JS-453-XX" hint="Alphanumeric · Used for worker self-registration" />
      </Box>
      <FormField label="Description (optional)">
        <TextField fullWidth multiline minRows={3} defaultValue="Renovation of main academic wing and gym facilities, Phase 1." sx={{ '& .MuiOutlinedInput-root': { fontSize: 14 } }} />
      </FormField>
      <Box sx={{ maxWidth: 220 }}>
        <FormField label="Status">
          <Select fullWidth size="small" defaultValue="active" sx={{ fontSize: 14 }}>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </Select>
        </FormField>
      </Box>
    </Box>
  );
}
