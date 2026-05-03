'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import XentryLogo from '@/components/ui/XentryLogo';
import FormField from '@/components/common/FormField';

export default function LoginPage() {
  const router = useRouter();
  const [captcha, setCaptcha] = useState(true);

  return (
    <Box sx={{ bgcolor: '#fff', borderRadius: { xs: '10px', sm: '14px' }, border: '1.5px solid #D1D5DB', p: { xs: '28px 20px', sm: '40px 44px' }, width: '100%', maxWidth: 420 }}>
      <Box sx={{ mb: 4 }}><XentryLogo /></Box>
      <Typography sx={{ fontSize: 22, fontWeight: 600, color: '#1A1C1E', mb: 0.75 }}>Sign in to your account</Typography>
      <Typography sx={{ fontSize: 14, color: '#6B7280', mb: 3.5 }}>Delphi Construction · Workforce Tracking Platform</Typography>

      <FormField label="Email address">
        <TextField fullWidth defaultValue="k.smith@delphiconstruction.com" size="small" sx={{ '& .MuiOutlinedInput-root': { fontSize: 14 } }} />
      </FormField>
      <FormField label="Password">
        <TextField fullWidth type="password" defaultValue="password123" size="small" sx={{ '& .MuiOutlinedInput-root': { fontSize: 14 } }} />
      </FormField>
      <Box sx={{ mb: 2.5, textAlign: 'right', mt: -1 }}>
        <Link href="/reset-password" style={{ fontSize: 12, color: '#1B4F8A', textDecoration: 'none', fontWeight: 500 }}>Forgot password?</Link>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, border: '1.5px solid #D1D5DB', borderRadius: '6px', p: '12px 14px', mb: 2.5, bgcolor: '#F9FAFB', cursor: 'pointer' }} onClick={() => setCaptcha(!captcha)}>
        <Box sx={{ width: 22, height: 22, borderRadius: '4px', bgcolor: captcha ? '#1B4F8A' : '#fff', border: `2px solid ${captcha ? '#1B4F8A' : '#D1D5DB'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          {captcha && <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
        </Box>
        <Typography sx={{ fontSize: 13, color: '#3D4348', flex: 1 }}>I&apos;m not a robot</Typography>
        <Typography sx={{ fontSize: 10, color: '#D1D5DB', textAlign: 'center', lineHeight: 1.2 }}>reCAPTCHA<br /><span style={{ fontSize: 9 }}>Privacy · Terms</span></Typography>
      </Box>

      <Button fullWidth variant="contained" onClick={() => router.push('/dashboard')}
        sx={{ height: 42, bgcolor: '#002244', fontSize: 15, fontWeight: 500, mb: 1.75, '&:hover': { bgcolor: '#001121' } }}>
        Sign In
      </Button>
      <Typography sx={{ textAlign: 'center', fontSize: 13, color: '#6B7280' }}>
        Need access? Contact your{' '}
        <Link href="#" style={{ color: '#1B4F8A', textDecoration: 'none', fontWeight: 500 }}>Xentry Administrator</Link>
      </Typography>
    </Box>
  );
}
