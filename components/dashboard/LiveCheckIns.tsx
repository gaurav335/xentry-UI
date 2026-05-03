import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SectionCard from '@/components/common/SectionCard';
import StatusBadge from '@/components/ui/StatusBadge';

const checkIns = [
  { name: 'Carlos M.', action: 'checked in at', place: 'Johnson High School', time: '8:38 AM · Northeast Plumbing', color: '#166534' },
  { name: 'Darius W.', action: 'checked in at', place: 'Riverside Medical', time: '8:35 AM · Acme Electric', color: '#166534' },
  { name: 'Maria T.', action: 'checked out of', place: 'Metro Housing Phase 2', time: '8:22 AM · Onsite: 3h 48m', color: '#991B1B' },
  { name: 'James P.', action: 'checked in at', place: 'Northside Library', time: '8:18 AM · Beacon HVAC', color: '#166534' },
  { name: 'Tanya R.', action: 'added to', place: 'Riverside Medical', time: '8:05 AM', color: '#2A6BB5' },
];

export default function LiveCheckIns() {
  return (
    <SectionCard
      title="Live Check-ins Today"
      action={<StatusBadge variant="green" label="Live" dot />}
      noPadding
    >
      {checkIns.map((item, i) => (
        <Box
          key={i}
          sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, px: 2.25, py: 1.5, borderBottom: i < checkIns.length - 1 ? '1px solid #F3F5F7' : 'none' }}
        >
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: item.color, mt: '5px', flexShrink: 0 }} />
          <Box>
            <Typography sx={{ fontSize: 13.5, color: '#3D4348' }}>
              <strong style={{ color: '#1A1C1E' }}>{item.name}</strong> {item.action} <strong style={{ color: '#1A1C1E' }}>{item.place}</strong>
            </Typography>
            <Typography sx={{ fontSize: 12, color: '#6B7280', mt: '2px' }}>{item.time}</Typography>
          </Box>
        </Box>
      ))}
    </SectionCard>
  );
}
