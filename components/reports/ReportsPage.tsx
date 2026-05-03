'use client';
import { useState } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Topbar from '@/components/layout/Topbar';
import InnerTabs, { TabItem } from '@/components/common/InnerTabs';
import JobsiteTab from './tabs/JobsiteTab';
import WorkerTab from './tabs/WorkerTab';

const tabs: TabItem[] = [
  { key: 'jobsite', label: 'Jobsite Activity' },
  { key: 'worker', label: 'Worker Report' },
  { key: 'rollcall', label: 'Roll Call' },
];

export default function ReportsPage() {
  const [tab, setTab] = useState('jobsite');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <Topbar title="Reports" />
      <Box sx={{ flex: 1, overflowY: 'auto', p: { xs: 1.5, sm: 2, md: 3 }, bgcolor: '#F9FAFB' }}>
        <Box sx={{ bgcolor: '#fff', border: '1.5px solid #D1D5DB', borderRadius: '10px', overflow: 'hidden' }}>
          <InnerTabs tabs={tabs} active={tab} onChange={setTab} />
          {tab === 'jobsite' && <JobsiteTab />}
          {tab === 'worker' && <WorkerTab />}
          {tab === 'rollcall' && (
            <Box sx={{ p: 4, textAlign: 'center' }}>
              <Typography sx={{ fontSize: 36, mb: 1.5 }}>📋</Typography>
              <Typography sx={{ fontSize: 15, fontWeight: 600, color: '#1A1C1E', mb: 0.75 }}>Real-Time Roll Call</Typography>
              <Typography sx={{ fontSize: 13.5, color: '#6B7280', maxWidth: 300, mx: 'auto', mb: 2 }}>View all workers currently checked into a given site in real time.</Typography>
              <Link href="/rollcall" style={{ textDecoration: 'none' }}>
                <Button variant="contained" sx={{ bgcolor: '#002244', '&:hover': { bgcolor: '#001121' }, fontSize: 13, height: 36 }}>Open Roll Call View →</Button>
              </Link>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
