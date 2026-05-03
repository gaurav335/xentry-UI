'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Topbar from '@/components/layout/Topbar';
import InnerTabs, { TabItem } from '@/components/common/InnerTabs';
import ProfileInfoTab from './ProfileInfoTab';
import ChangePasswordTab from './ChangePasswordTab';

const tabs: TabItem[] = [
  { key: 'profile', label: 'Profile Information' },
  { key: 'security', label: 'Change Password' },
];

export default function ProfilePage() {
  const [tab, setTab] = useState('profile');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <Topbar title="My Profile" />

      <Box sx={{ flex: 1, overflowY: 'auto', bgcolor: '#F9FAFB', p: { xs: 1.5, sm: 2, md: 3 } }}>
        <Box sx={{
          bgcolor: '#fff',
          border: '1.5px solid #D1D5DB',
          borderRadius: '10px',
          overflow: 'hidden',
        }}>
          <InnerTabs tabs={tabs} active={tab} onChange={setTab} />
          {tab === 'profile'   && <ProfileInfoTab />}
          {tab === 'security'  && <ChangePasswordTab />}
        </Box>
      </Box>
    </Box>
  );
}
