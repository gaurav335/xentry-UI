'use client';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Topbar from '@/components/layout/Topbar';
import SectionCard from '@/components/common/SectionCard';
import FormField from '@/components/common/FormField';
import Breadcrumb from '@/components/common/Breadcrumb';
import StatusBadge from '@/components/ui/StatusBadge';
import IconBtn from '@/components/common/IconBtn';

const RemoveIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;

const assignedProjects = [
  { name: 'Johnson High School', code: 'JS-453-XX · Active' },
  { name: 'Riverside Medical Center', code: 'RM-210-B · Active' },
];

const activity = [
  { color: '#166534', text: 'Checked in at', place: 'Johnson High School', time: 'Today 7:52 AM · 2h 14m ago' },
  { color: '#991B1B', text: 'Checked out of', place: 'Riverside Medical', time: 'Mar 30 · Onsite 5h 42m' },
  { color: '#166534', text: 'Checked in at', place: 'Riverside Medical', time: 'Mar 30 · 6:08 AM' },
];

export default function WorkerDetailPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <Topbar title="Worker Profile">
        <Link href="/workers" style={{ textDecoration: 'none' }}>
          <Button variant="outlined" sx={{ borderColor: '#D1D5DB', color: '#3D4348', fontSize: 13, height: 34 }}>← Back to Workers</Button>
        </Link>
        <Button variant="contained" sx={{ bgcolor: '#002244', '&:hover': { bgcolor: '#001121' }, fontSize: 13, height: 34 }}>Save Changes</Button>
      </Topbar>

      <Box sx={{ flex: 1, overflowY: 'auto', p: { xs: 1.5, sm: 2, md: 3 }, bgcolor: '#F9FAFB' }}>
        <Breadcrumb items={[{ label: 'Workers', href: '/workers' }, { label: 'Carlos Martinez' }]} />

        {/* Worker header */}
        <Box sx={{ bgcolor: '#fff', border: '1.5px solid #D1D5DB', borderRadius: '10px', p: '20px 24px', mb: 2, display: 'flex', alignItems: 'center', gap: 2.25 }}>
          <Box sx={{ width: 64, height: 64, borderRadius: '50%', bgcolor: '#1B4F8A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 600, color: '#fff', flexShrink: 0 }}>CM</Box>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontSize: 20, fontWeight: 600, color: '#1A1C1E', mb: 0.5 }}>Carlos Martinez</Typography>
            <Box sx={{ display: 'flex', gap: 1.75, flexWrap: 'wrap', alignItems: 'center' }}>
              <Typography sx={{ fontSize: 13, color: '#6B7280' }}>(508) 555-0183</Typography>
              <Typography sx={{ fontSize: 13, color: '#6B7280' }}>Northeast Plumbing Inc.</Typography>
              <Typography sx={{ fontSize: 13, color: '#6B7280' }}>Joined Mar 12, 2026</Typography>
              <StatusBadge variant="green" label="Currently Onsite — Johnson HS" dot />
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 2 }}>
          {/* Left column */}
          <Box>
            <SectionCard title="Profile Information">
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.75 }}>
                <FormField label="First Name" defaultValue="Carlos" />
                <FormField label="Last Name" defaultValue="Martinez" />
              </Box>
              <FormField label="Phone Number" defaultValue="(508) 555-0183" hint="Used as unique identifier for login" />
              <FormField label="Primary Language">
                <Select fullWidth size="small" defaultValue="spanish" sx={{ fontSize: 14 }}>
                  <MenuItem value="english">English</MenuItem>
                  <MenuItem value="spanish">Spanish</MenuItem>
                  <MenuItem value="portuguese">Portuguese</MenuItem>
                </Select>
              </FormField>
            </SectionCard>

            <SectionCard title="Assigned Projects" noPadding action={
              <Button variant="contained" size="small" sx={{ bgcolor: '#002244', '&:hover': { bgcolor: '#001121' }, fontSize: 12, height: 28, px: 1.25 }}>Assign Project</Button>
            }>
              <Box sx={{ px: 2.25, py: 0.5 }}>
                {assignedProjects.map((p, i) => (
                  <Box key={p.name} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1.25, borderBottom: i < assignedProjects.length - 1 ? '1px solid #F3F5F7' : 'none' }}>
                    <Box>
                      <Typography sx={{ fontSize: 13.5, fontWeight: 500, color: '#1A1C1E' }}>{p.name}</Typography>
                      <Typography sx={{ fontSize: 12, color: '#6B7280' }}>{p.code}</Typography>
                    </Box>
                    <IconBtn title="Remove" danger><RemoveIcon /></IconBtn>
                  </Box>
                ))}
              </Box>
            </SectionCard>
          </Box>

          {/* Right column */}
          <Box>
            <SectionCard title="OSHA Credentials" noPadding action={
              <Button variant="outlined" size="small" sx={{ borderColor: '#D1D5DB', color: '#3D4348', fontSize: 12, height: 28, px: 1.25 }}>Upload</Button>
            }>
              <Box sx={{ p: '12px 18px' }}>
                <Box sx={{ border: '1.5px solid #D1D5DB', borderRadius: '6px', p: '12px 14px', display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box sx={{ width: 38, height: 38, borderRadius: '6px', bgcolor: '#FDF0E6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8660A" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ fontSize: 13.5, fontWeight: 500, color: '#1A1C1E' }}>OSHA 10-Hour Card</Typography>
                    <Typography sx={{ fontSize: 12, color: '#6B7280' }}>Issued Jan 15, 2025 · Expires Jan 15, 2027</Typography>
                  </Box>
                  <StatusBadge variant="green" label="Valid" />
                </Box>
              </Box>
            </SectionCard>

            <SectionCard title="Recent Activity" noPadding action={
              <Link href="/reports" style={{ textDecoration: 'none' }}>
                <Button variant="outlined" size="small" sx={{ borderColor: '#D1D5DB', color: '#3D4348', fontSize: 12, height: 28, px: 1.25 }}>Full Report</Button>
              </Link>
            }>
              {activity.map((a, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, px: 2.25, py: 1.5, borderBottom: i < activity.length - 1 ? '1px solid #F3F5F7' : 'none' }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: a.color, mt: '5px', flexShrink: 0 }} />
                  <Box>
                    <Typography sx={{ fontSize: 13.5, color: '#3D4348' }}>{a.text} <strong style={{ color: '#1A1C1E' }}>{a.place}</strong></Typography>
                    <Typography sx={{ fontSize: 12, color: '#6B7280', mt: '2px' }}>{a.time}</Typography>
                  </Box>
                </Box>
              ))}
            </SectionCard>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
