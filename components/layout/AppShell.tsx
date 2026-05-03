'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Sidebar from './Sidebar';
import { SidebarContext } from './SidebarContext';

interface NavItem { label: string; href: string; icon: React.ReactNode; badge?: number }
interface NavSection { title: string; items: NavItem[] }

interface AppShellProps {
  children: React.ReactNode;
  sections: NavSection[];
  tenantName?: string;
  tenantRole?: string;
  userName?: string;
  userRole?: string;
  userInitials?: string;
}

const SIDEBAR_WIDTH = 220;

export default function AppShell({
  children, sections, tenantName, tenantRole, userName, userRole, userInitials,
}: AppShellProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const sidebarProps = { sections, tenantName, tenantRole, userName, userRole, userInitials };

  return (
    <SidebarContext.Provider value={{ openDrawer: () => setDrawerOpen(true) }}>
      <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>

        {/* ── Desktop: permanent sidebar ─────────────────────────── */}
        {!isMobile && (
          <Box sx={{ width: SIDEBAR_WIDTH, flexShrink: 0, height: '100vh', overflow: 'hidden' }}>
            <Sidebar {...sidebarProps} />
          </Box>
        )}

        {/* ── Mobile: slide-in Drawer ────────────────────────────── */}
        <Drawer
          open={isMobile && drawerOpen}
          onClose={() => setDrawerOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              width: SIDEBAR_WIDTH,
              boxSizing: 'border-box',
              border: 'none',
              bgcolor: '#002244',   // navy fill so no white bleed-through
              overflow: 'hidden',
            },
          }}
        >
          {/* full-height wrapper so Sidebar stretches to bottom of drawer */}
          <Box onClick={() => setDrawerOpen(false)} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Sidebar {...sidebarProps} />
          </Box>
        </Drawer>

        {/* ── Main content ───────────────────────────────────────── */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minWidth: 0 }}>
          {children}
        </Box>

      </Box>
    </SidebarContext.Provider>
  );
}
