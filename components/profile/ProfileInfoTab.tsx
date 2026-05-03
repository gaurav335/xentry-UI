'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Alert from '@mui/material/Alert';
import FormField from '@/components/common/FormField';
import SectionCard from '@/components/common/SectionCard';
import StatusBadge from '@/components/ui/StatusBadge';

// ── Toggle switch ─────────────────────────────────────────────────────────────
function Toggle({ on, onChange }: { on: boolean; onChange: (v: boolean) => void }) {
  return (
    <Box onClick={() => onChange(!on)} sx={{
      width: 42, height: 24, borderRadius: '12px', flexShrink: 0,
      bgcolor: on ? '#00BFA5' : '#D1D5DB',
      position: 'relative', cursor: 'pointer',
      transition: 'background-color 0.2s',
    }}>
      <Box sx={{
        width: 18, height: 18, borderRadius: '50%', bgcolor: '#fff',
        position: 'absolute', top: 3,
        left: on ? 21 : 3,
        transition: 'left 0.2s',
        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
      }} />
    </Box>
  );
}

// ── Account detail row ────────────────────────────────────────────────────────
function DetailRow({ label, value, last }: { label: string; value: React.ReactNode; last?: boolean }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1.25, borderBottom: last ? 'none' : '1px solid #F3F5F7' }}>
      <Typography sx={{ fontSize: 13, color: '#6B7280' }}>{label}</Typography>
      <Box>{value}</Box>
    </Box>
  );
}

// ── Notification preference row ───────────────────────────────────────────────
const defaultPrefs = [
  { id: 'rollcall', label: 'Roll call alerts', desc: 'Get notified when workers are flagged during roll call', on: true },
  { id: 'digest', label: 'Daily check-in digest', desc: 'Morning summary of yesterday\'s check-in activity', on: false },
  { id: 'osha', label: 'OSHA expiry reminders', desc: 'Alerts when a worker\'s credential is about to expire', on: true },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function ProfileInfoTab() {
  const [prefs, setPrefs] = useState(defaultPrefs);
  const [saved, setSaved] = useState(false);

  const togglePref = (id: string) =>
    setPrefs((p) => p.map((item) => item.id === id ? { ...item, on: !item.on } : item));

  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 3000); };

  return (
    <Box sx={{ p: { xs: 2, sm: 2.5 } }}>
      {saved && (
        <Alert severity="success" sx={{ mb: 2.5, borderRadius: '8px' }}>Profile updated successfully.</Alert>
      )}

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '260px 1fr' }, gap: 2.5 }}>

        {/* ── Left column: avatar + account details ── */}
        <Box>
          {/* Avatar card */}
          <SectionCard title="Profile Photo">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, py: 1 }}>
              <Box sx={{ position: 'relative' }}>
                <Box sx={{
                  width: 88, height: 88, borderRadius: '50%',
                  bgcolor: '#1B4F8A',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 30, fontWeight: 700, color: '#fff',
                  border: '3px solid #EBF3FC',
                }}>
                  KS
                </Box>
                {/* Online indicator */}
                <Box sx={{ width: 14, height: 14, bgcolor: '#00BFA5', borderRadius: '50%', border: '2px solid #fff', position: 'absolute', bottom: 4, right: 4 }} />
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#1A1C1E' }}>Kathryn Smith</Typography>
                <Typography sx={{ fontSize: 12, color: '#6B7280', mt: 0.25 }}>Tenant Admin</Typography>
              </Box>
              <Button variant="outlined" size="small" component="label" sx={{ borderColor: '#D1D5DB', color: '#3D4348', fontSize: 12, height: 32, px: 2 }}>
                Change Photo
                <input type="file" accept="image/*" hidden />
              </Button>
              <Typography sx={{ fontSize: 11, color: '#6B7280', textAlign: 'center', lineHeight: 1.4 }}>
                JPG, PNG or GIF<br />Max file size: 2 MB
              </Typography>
            </Box>
          </SectionCard>

          {/* Account details (read-only) */}
          <SectionCard title="Account Details" noPadding>
            <Box sx={{ px: 2.25, pb: 0.5 }}>
              <DetailRow label="Role" value={<StatusBadge variant="blue" label="Tenant Admin" />} />
              <DetailRow label="Company" value={<Typography sx={{ fontSize: 13, fontWeight: 500, color: '#1A1C1E' }}>Delphi Construction</Typography>} />
              <DetailRow label="Member Since" value={<Typography sx={{ fontSize: 13, color: '#6B7280' }}>Jan 5, 2025</Typography>} />
              <DetailRow label="Last Login" value={<Typography sx={{ fontSize: 13, color: '#6B7280' }}>Today, 8:42 AM</Typography>} last />
            </Box>
          </SectionCard>
        </Box>

        {/* ── Right column: personal info + notifications ── */}
        <Box>
          {/* Personal information form */}
          <SectionCard title="Personal Information">
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.75 }}>
              <FormField label="First Name" defaultValue="Kathryn" />
              <FormField label="Last Name" defaultValue="Smith" />
            </Box>
            <FormField
              label="Email Address"
              defaultValue="k.smith@delphiconstruction.com"
              hint="Contact your administrator to update your email."
            />
            <FormField label="Phone Number" defaultValue="(617) 555-0100" />
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.75 }}>
              <FormField label="Preferred Language">
                <Select fullWidth size="small" defaultValue="english" sx={{ fontSize: 14 }}>
                  <MenuItem value="english">English</MenuItem>
                  <MenuItem value="spanish">Spanish</MenuItem>
                  <MenuItem value="portuguese">Portuguese</MenuItem>
                  <MenuItem value="french">French</MenuItem>
                </Select>
              </FormField>
              <FormField label="Timezone">
                <Select fullWidth size="small" defaultValue="eastern" sx={{ fontSize: 14 }}>
                  <MenuItem value="eastern">Eastern Time (ET)</MenuItem>
                  <MenuItem value="central">Central Time (CT)</MenuItem>
                  <MenuItem value="mountain">Mountain Time (MT)</MenuItem>
                  <MenuItem value="pacific">Pacific Time (PT)</MenuItem>
                </Select>
              </FormField>
            </Box>

            <Box sx={{ pt: 0.5 }}>
              <Button
                variant="contained"
                onClick={handleSave}
                sx={{ bgcolor: '#002244', '&:hover': { bgcolor: '#001121' }, fontSize: 13, height: 38, px: 3, borderRadius: '6px' }}
              >
                Save Changes
              </Button>
            </Box>
          </SectionCard>

          {/* Notification preferences */}
          <SectionCard title="Email Notifications" noPadding>
            <Box sx={{ px: 2.25, py: 0.5 }}>
              {prefs.map((pref, i) => (
                <Box key={pref.id} sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 2, py: 1.5, borderBottom: i < prefs.length - 1 ? '1px solid #F3F5F7' : 'none' }}>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography sx={{ fontSize: 13.5, fontWeight: 500, color: '#1A1C1E', mb: 0.25 }}>
                      {pref.label}
                    </Typography>
                    <Typography sx={{ fontSize: 12, color: '#6B7280', lineHeight: 1.4 }}>
                      {pref.desc}
                    </Typography>
                  </Box>
                  <Toggle on={pref.on} onChange={() => togglePref(pref.id)} />
                </Box>
              ))}
            </Box>
          </SectionCard>
        </Box>

      </Box>
    </Box>
  );
}
