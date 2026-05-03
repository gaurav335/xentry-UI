import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

interface FormFieldProps {
  label: string;
  placeholder?: string;
  defaultValue?: string;
  hint?: string;
  type?: string;
  required?: boolean;
  children?: React.ReactNode;
}

export default function FormField({
  label, placeholder, defaultValue, hint, type = 'text', children,
}: FormFieldProps) {
  return (
    <Box sx={{ mb: 2 }}>
      <InputLabel sx={{ fontSize: 13, fontWeight: 500, color: '#3D4348', mb: 0.75 }}>
        {label}
      </InputLabel>
      {children ?? (
        <TextField
          fullWidth
          size="small"
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          sx={{ '& .MuiOutlinedInput-root': { fontSize: 14 } }}
        />
      )}
      {hint && (
        <Typography sx={{ fontSize: 12, color: '#6B7280', mt: 0.5 }}>{hint}</Typography>
      )}
    </Box>
  );
}
