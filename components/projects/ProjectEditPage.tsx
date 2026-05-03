'use client';
import { useState } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Topbar from '@/components/layout/Topbar';
import InnerTabs, { TabItem } from '@/components/common/InnerTabs';
import Breadcrumb from '@/components/common/Breadcrumb';
import DetailsTab from './tabs/DetailsTab';
import GeoTab from './tabs/GeoTab';
import WorkersTab from './tabs/WorkersTab';
import SubsTab from './tabs/SubsTab';

const tabs: TabItem[] = [
  { key: 'details', label: 'Project Details' },
  { key: 'geo', label: 'Geofence / Location' },
  { key: 'workers', label: 'Workers' },
  { key: 'subs', label: 'Subcontractors & PINs' },
];

export default function ProjectEditPage() {
  const [tab, setTab] = useState('details');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <Topbar title="Edit Project — Johnson High School">
        <Link href="/projects" style={{ textDecoration: 'none' }}>
          <Button variant="outlined" sx={{ borderColor: '#D1D5DB', color: '#3D4348', fontSize: 13, height: 34 }}>Cancel</Button>
        </Link>
        <Button variant="contained" sx={{ bgcolor: '#002244', '&:hover': { bgcolor: '#001121' }, fontSize: 13, height: 34 }}>Save Changes</Button>
      </Topbar>

      <Box sx={{ flex: 1, overflowY: 'auto', p: { xs: 1.5, sm: 2, md: 3 }, bgcolor: '#F9FAFB' }}>
        <Breadcrumb items={[{ label: 'Projects', href: '/projects' }, { label: 'Johnson High School' }]} />
        <Box sx={{ bgcolor: '#fff', border: '1.5px solid #D1D5DB', borderRadius: '10px', overflow: 'hidden' }}>
          <InnerTabs tabs={tabs} active={tab} onChange={setTab} />
          {tab === 'details' && <DetailsTab />}
          {tab === 'geo' && <GeoTab />}
          {tab === 'workers' && <WorkersTab />}
          {tab === 'subs' && <SubsTab />}
        </Box>
      </Box>
    </Box>
  );
}
