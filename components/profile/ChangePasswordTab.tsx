'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import FormField from '@/components/common/FormField';
import SectionCard from '@/components/common/SectionCard';

// ── Password strength logic ───────────────────────────────────────────────────
function getStrength(pwd: string) {
  let score = 0;
  if (pwd.length >= 12) score++;
  if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  return score;
}

const STRENGTH_META = [
  { label: '', color: '#D1D5DB' },
  { label: 'Weak', color: '#991B1B' },
  { label: 'Fair', color: '#92400E' },
  { label: 'Good', color: '#2A6BB5' },
  { label: 'Strong', color: '#166534' },
];

const RULES = [
  { label: 'Minimum 12 characters', test: (p: string) => p.length >= 12 },
  { label: 'At least one uppercase letter', test: (p: string) => /[A-Z]/.test(p) },
  { label: 'At least one lowercase letter', test: (p: string) => /[a-z]/.test(p) },
  { label: 'At least one number', test: (p: string) => /[0-9]/.test(p) },
  { label: 'At least one special character (!@#$…)', test: (p: string) => /[^A-Za-z0-9]/.test(p) },
];

// ── Check icon ────────────────────────────────────────────────────────────────
function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
      <path d="M2 6l3 3 5-5" stroke="#166534" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function ChangePasswordTab() {
  const [current, setCurrent] = useState('');
  const [newPwd, setNewPwd] = useState('');
  const [confirm, setConfirm] = useState('');
  const [saved, setSaved] = useState(false);

  const strength = getStrength(newPwd);
  const meta = STRENGTH_META[strength];
  const allPassed = RULES.every((r) => r.test(newPwd));
  const matches = newPwd.length > 0 && newPwd === confirm;

  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 3000); };

  return (
    <Box sx={{ p: { xs: 2, sm: 2.5 } }}>
      <Box sx={{ maxWidth: 560 }}>
        {saved && (
          <Alert severity="success" sx={{ mb: 2.5, borderRadius: '8px' }}>Password updated successfully.</Alert>
        )}

        <SectionCard title="Change Password" sx={{ mb: 0 }}>
          {/* Current password */}
          <FormField label="Current Password">
            <TextField fullWidth size="small" type="password" placeholder="Enter your current password"
              value={current} onChange={(e) => setCurrent(e.target.value)}
              sx={{ '& .MuiOutlinedInput-root': { fontSize: 14 } }} />
          </FormField>

          <Box sx={{ height: 1, bgcolor: '#F3F5F7', mx: -2.25, my: 2 }} />

          {/* New password */}
          <FormField label="New Password">
            <TextField fullWidth size="small" type="password" placeholder="Enter new password"
              value={newPwd} onChange={(e) => setNewPwd(e.target.value)}
              sx={{ '& .MuiOutlinedInput-root': { fontSize: 14 } }} />
          </FormField>

          {/* Strength bar — only when typing */}
          {newPwd.length > 0 && (
            <Box sx={{ mb: 2, mt: -0.5 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.875 }}>
                <Typography sx={{ fontSize: 12, color: '#6B7280' }}>Password strength</Typography>
                {strength > 0 && (
                  <Typography sx={{ fontSize: 12, fontWeight: 600, color: meta.color }}>{meta.label}</Typography>
                )}
              </Box>
              <Box sx={{ display: 'flex', gap: 0.625 }}>
                {[1, 2, 3, 4].map((i) => (
                  <Box key={i} sx={{ flex: 1, height: 5, borderRadius: '3px', bgcolor: i <= strength ? meta.color : '#E5E7EB', transition: 'background-color 0.25s' }} />
                ))}
              </Box>
            </Box>
          )}

          {/* Confirm password */}
          <FormField label="Confirm New Password"
            hint={confirm.length > 0 && !matches ? 'Passwords do not match.' : undefined}>
            <TextField fullWidth size="small" type="password" placeholder="Re-enter new password"
              value={confirm} onChange={(e) => setConfirm(e.target.value)}
              error={confirm.length > 0 && !matches}
              sx={{ '& .MuiOutlinedInput-root': { fontSize: 14 } }} />
          </FormField>

          {/* Rules checklist */}
          <Box sx={{ bgcolor: '#F9FAFB', borderRadius: '8px', p: '14px 16px', mb: 2.5 }}>
            <Typography sx={{ fontSize: 12, fontWeight: 600, color: '#3D4348', mb: 1.25, textTransform: 'uppercase', letterSpacing: '0.4px' }}>
              Requirements
            </Typography>
            {RULES.map((rule) => {
              const pass = newPwd.length > 0 && rule.test(newPwd);
              return (
                <Box key={rule.label} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: '6px', '&:last-child': { mb: 0 } }}>
                  <Box sx={{
                    width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
                    bgcolor: pass ? '#DCFCE7' : '#F3F5F7',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background-color 0.2s',
                  }}>
                    {pass ? <CheckIcon /> : <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: '#D1D5DB' }} />}
                  </Box>
                  <Typography sx={{ fontSize: 12.5, color: pass ? '#166534' : '#6B7280', transition: 'color 0.2s' }}>
                    {rule.label}
                  </Typography>
                </Box>
              );
            })}
          </Box>

          <Button
            variant="contained"
            disabled={!current || !allPassed || !matches}
            onClick={handleSave}
            sx={{ bgcolor: '#002244', '&:hover': { bgcolor: '#001121' }, '&.Mui-disabled': { bgcolor: '#D1D5DB' }, fontSize: 13, height: 38, px: 3, borderRadius: '6px' }}
          >
            Update Password
          </Button>
        </SectionCard>
      </Box>
    </Box>
  );
}
