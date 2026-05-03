'use client';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Topbar from '@/components/layout/Topbar';
import DataTable, { Column, TableToolbar, SearchBar, FilterSelect } from '@/components/common/DataTable';
import StatCard from '@/components/ui/StatCard';
import StatusBadge from '@/components/ui/StatusBadge';

interface RollCallRow { name: string; sub: string; checkIn: string; time: string; method: string }

const workers: RollCallRow[] = [
  { name: 'Carlos Martinez',  sub: 'Northeast Plumbing', checkIn: '7:52 AM', time: '2h 10m', method: 'Geofence' },
  { name: 'James Park',       sub: 'Beacon HVAC',        checkIn: '7:04 AM', time: '2h 58m', method: 'Geofence' },
  { name: 'Tanya Reynolds',   sub: 'Atlas Electrical',   checkIn: '6:45 AM', time: '3h 17m', method: 'Manual'   },
  { name: 'Devon Willis',     sub: 'Northeast Plumbing', checkIn: '5:58 AM', time: '4h 04m', method: 'Geofence' },
  { name: 'Rosa Gutierrez',   sub: 'Bay State Masonry',  checkIn: '7:30 AM', time: '2h 32m', method: 'Geofence' },
  { name: 'Andre Thompson',   sub: 'Beacon HVAC',        checkIn: '8:01 AM', time: '1h 41m', method: 'Geofence' },
];

const siteOptions = [
  { value: 'jhs',  label: 'Johnson High School'    },
  { value: 'rmc',  label: 'Riverside Medical Center' },
  { value: 'mh2',  label: 'Metro Housing Phase 2'  },
  { value: 'nl',   label: 'Northside Library'       },
  { value: 'all',  label: '— All Active Sites —'   },
];

const columns: Column<RollCallRow>[] = [
  { key: 'name',    label: 'Worker',         render: (r) => <Box sx={{ fontWeight: 500, color: '#1A1C1E' }}>{r.name}</Box> },
  { key: 'sub',     label: 'Subcontractor',  render: (r) => <Box sx={{ color: '#6B7280' }}>{r.sub}</Box> },
  { key: 'checkIn', label: 'Check-In Time',  render: (r) => <Box sx={{ fontFamily: '"DM Mono", monospace', fontSize: 12.5 }}>{r.checkIn}</Box> },
  { key: 'time',    label: 'Time Onsite',    render: (r) => <Box sx={{ fontWeight: 500, color: '#166534' }}>{r.time}</Box> },
  { key: 'method',  label: 'Method',         render: (r) => <StatusBadge variant={r.method === 'Geofence' ? 'blue' : 'gray'} label={r.method} /> },
];

export default function RollCallPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>

      {/* Topbar — only small elements here so it never overflows on mobile */}
      <Topbar title="Roll Call — Live">
        <Button variant="outlined" size="small"
          sx={{ borderColor: '#D1D5DB', color: '#3D4348', fontSize: 13, height: 34, flexShrink: 0 }}>
          PDF
        </Button>
      </Topbar>

      {/* Site selector bar — separate row so it never breaks the topbar on mobile */}
      <Box sx={{
        display: 'flex', alignItems: 'center', gap: 1.5,
        px: { xs: 2, sm: 3 }, py: 1.25,
        bgcolor: '#fff', borderBottom: '1px solid #D1D5DB', flexShrink: 0,
      }}>
        <Typography sx={{ fontSize: 13, color: '#6B7280', flexShrink: 0 }}>Site:</Typography>
        <Select size="small" defaultValue="jhs"
          sx={{ fontSize: 13, bgcolor: '#F9FAFB', height: 34, flex: 1, maxWidth: { sm: 300 } }}>
          {siteOptions.map((o) => (
            <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>
          ))}
        </Select>
      </Box>

      {/* Live status bar */}
      <Box sx={{
        display: 'flex', alignItems: 'center', gap: 1.5,
        bgcolor: '#166534', color: '#fff',
        px: { xs: 2, sm: 3 }, py: 1.25,
        fontSize: 13, fontWeight: 500, flexShrink: 0,
        flexWrap: 'wrap',
      }}>
        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#fff', animation: 'pulse 1.5s ease infinite', flexShrink: 0 }} />
        Live · Last updated 8:42 AM · 47 workers onsite across all active projects
      </Box>

      {/* Page body */}
      <Box sx={{ flex: 1, overflowY: 'auto', p: { xs: 1.5, sm: 2, md: 3 }, bgcolor: '#F9FAFB' }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 1.75, mb: 2 }}>
          <StatCard label="Onsite Now"       value={18}        valueColor="#166534" delta="Johnson High School"    />
          <StatCard label="Subcontractors"   value={6}                              delta="On this site"           />
          <StatCard label="Earliest Check-in" value="5:58 AM"                      delta="D. Willis · 2h 44m ago" />
        </Box>

        <DataTable
          columns={columns}
          rows={workers}
          toolbar={
            <TableToolbar>
              <SearchBar placeholder="Filter workers…" />
              <FilterSelect value="all" options={[
                { value: 'all',   label: 'All Subcontractors'  },
                { value: 'nep',   label: 'Northeast Plumbing'  },
                { value: 'bhvac', label: 'Beacon HVAC'         },
                { value: 'atlas', label: 'Atlas Electrical'    },
              ]} />
            </TableToolbar>
          }
          pageInfo="Showing 6 of 18 workers onsite · Johnson High School"
          totalPages={3}
        />
      </Box>
    </Box>
  );
}
