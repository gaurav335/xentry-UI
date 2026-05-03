import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormField from '@/components/common/FormField';

export default function GeoTab() {
  return (
    <Box sx={{ p: 2.5 }}>
      <Box sx={{ mb: 2 }}>
        <Typography sx={{ fontSize: 13, fontWeight: 500, color: '#3D4348', mb: 0.75 }}>Street Address</Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <input defaultValue="45 Oak Street, Taunton, MA 02780" style={{ flex: 1, height: 36, border: '1.5px solid #D1D5DB', borderRadius: 6, padding: '0 12px', fontSize: 14, fontFamily: 'inherit', outline: 'none' }} />
          <Button variant="contained" sx={{ bgcolor: '#002244', '&:hover': { bgcolor: '#001121' }, whiteSpace: 'nowrap', fontSize: 13, height: 36 }}>Geocode Address</Button>
        </Box>
        <Typography sx={{ fontSize: 12, color: '#6B7280', mt: 0.5 }}>Enter address then click Geocode to auto-fill coordinates, or enter manually below.</Typography>
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.75 }}>
        <FormField label="Latitude" defaultValue="41.9027" />
        <FormField label="Longitude" defaultValue="-71.0898" />
      </Box>
      <FormField label="Check-in Radius (yards)" defaultValue="100" hint="Default is 100 yards. Geofence radius around site center." />
      <Typography sx={{ fontSize: 13, fontWeight: 500, color: '#3D4348', mb: 1 }}>Map Preview — drag pin to adjust center</Typography>
      <Box sx={{ width: '100%', height: 200, bgcolor: '#E8EAED', borderRadius: '6px', border: '1.5px solid #D1D5DB', position: 'relative', overflow: 'hidden', mb: 1 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M 30 0 L 0 0 0 30" fill="none" stroke="#C8CAD0" strokeWidth="0.5"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
          <rect x="5%" y="20%" width="30%" height="20%" rx="3" fill="#D0D4DB"/>
          <rect x="55%" y="30%" width="25%" height="30%" rx="3" fill="#D0D4DB"/>
          <line x1="0" y1="65%" x2="100%" y2="65%" stroke="#B8BCC4" strokeWidth="8"/>
        </svg>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 90, height: 90, borderRadius: '50%', border: '2px dashed #2A6BB5', bgcolor: 'rgba(42,107,181,0.08)' }} />
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -100%)' }}>
          <svg width="22" height="28" viewBox="0 0 22 28" fill="none"><path d="M11 0C4.9 0 0 4.9 0 11c0 7.7 11 17 11 17s11-9.3 11-17c0-6.1-4.9-11-11-11z" fill="#E24B4A"/><circle cx="11" cy="11" r="4" fill="#fff"/></svg>
        </Box>
        <Box sx={{ position: 'absolute', bottom: 8, left: 8, bgcolor: 'rgba(255,255,255,0.9)', fontSize: 11, color: '#3D4348', px: 1, py: 0.375, borderRadius: '4px', border: '1px solid #D1D5DB' }}>100 yd radius · 45 Oak St, Taunton</Box>
      </Box>
    </Box>
  );
}
