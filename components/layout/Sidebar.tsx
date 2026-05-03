'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: number;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

interface SidebarProps {
  tenantName?: string;
  tenantRole?: string;
  userName?: string;
  userRole?: string;
  userInitials?: string;
  sections: NavSection[];
}

function SvgDashboard() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>;
}

export { SvgDashboard };

export default function Sidebar({ tenantName = 'Delphi Construction', tenantRole = 'Tenant Admin', userName = 'Kathryn Smith', userRole = 'Tenant Admin', userInitials = 'KS', sections }: SidebarProps) {
  const pathname = usePathname();

  return (
    <Box sx={{
      width: 220, flexShrink: 0,
      bgcolor: '#002244',
      height: '100%',
      display: 'flex', flexDirection: 'column',
      minHeight: '100vh',
    }}>
      {/* Brand */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, p: '18px 16px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <Box sx={{ width: 32, height: 32, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: '8px', border: '1.5px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00BFA5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            <circle cx="12" cy="9" r="2.5" fill="#00BFA5" stroke="none"/>
          </svg>
        </Box>
        <Typography sx={{ fontSize: 15, fontWeight: 800, color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          X<span style={{ color: '#00BFA5' }}>ENTRY</span>
        </Typography>
      </Box>

      {/* Tenant */}
      <Box sx={{ mx: 1.5, mt: 1.25, mb: 0.5, px: 1.25, py: 1, bgcolor: 'rgba(255,255,255,0.06)', borderRadius: '6px' }}>
        <Typography sx={{ display: 'block', fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.75)', mb: '1px' }}>{tenantName}</Typography>
        <Typography sx={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>{tenantRole}</Typography>
      </Box>

      {/* Nav */}
      <Box sx={{ flex: 1, px: 1.25, py: 1, overflowY: 'auto' }}>
        {sections.map((section) => (
          <Box key={section.title}>
            <Typography sx={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.8px', textTransform: 'uppercase', px: 1, pt: 1.5, pb: 0.5 }}>
              {section.title}
            </Typography>
            {section.items.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href));
              return (
                <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
                  <Box sx={{
                    display: 'flex', alignItems: 'center', gap: '9px',
                    px: 1.25, py: 1,
                    borderRadius: '6px',
                    color: isActive ? '#fff' : 'rgba(255,255,255,0.6)',
                    bgcolor: isActive ? '#00BFA5' : 'transparent',
                    fontSize: 13.5, fontWeight: isActive ? 500 : 400,
                    cursor: 'pointer', mb: '1px',
                    transition: 'all 0.12s',
                    '&:hover': !isActive ? { bgcolor: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.9)' } : {},
                    '& svg': { opacity: isActive ? 1 : 0.7, flexShrink: 0 },
                  }}>
                    {item.icon}
                    <Box component="span" sx={{ flex: 1 }}>{item.label}</Box>
                    {item.badge && (
                      <Box component="span" sx={{ width: 18, height: 18, borderRadius: '50%', bgcolor: '#E8660A', color: '#fff', fontSize: 10, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                        {item.badge}
                      </Box>
                    )}
                  </Box>
                </Link>
              );
            })}
          </Box>
        ))}
      </Box>

      {/* User footer — links to /profile */}
      <Box sx={{ p: 1.5, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <Link href="/profile" style={{ textDecoration: 'none' }}>
          <Box sx={{
            display: 'flex', alignItems: 'center', gap: '9px',
            px: 1.25, py: 1, borderRadius: '6px', cursor: 'pointer',
            bgcolor: pathname === '/profile' ? 'rgba(255,255,255,0.1)' : 'transparent',
            transition: 'background 0.12s',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.07)' },
          }}>
            <Box sx={{ width: 30, height: 30, borderRadius: '50%', bgcolor: '#2A6BB5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600, color: '#fff', flexShrink: 0 }}>
              {userInitials}
            </Box>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography sx={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.85)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{userName}</Typography>
              <Typography sx={{ fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>View profile →</Typography>
            </Box>
          </Box>
        </Link>
      </Box>
    </Box>
  );
}
