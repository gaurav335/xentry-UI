'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Fade from '@mui/material/Fade';

export default function NavigationProgress() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const pathnameRef = useRef(pathname);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // When pathname actually changes → navigation is complete, hide bar
  useEffect(() => {
    if (pathnameRef.current !== pathname) {
      pathnameRef.current = pathname;
      if (hideTimer.current) clearTimeout(hideTimer.current);
      // Brief pause at 100% before hiding so it looks like it finishes
      hideTimer.current = setTimeout(() => setVisible(false), 250);
    }
  }, [pathname]);

  // Intercept ALL internal link clicks via event delegation
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Ignore: external, hash-only, mailto/tel, new tab
      if (
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href === '#' ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        anchor.getAttribute('target') === '_blank'
      ) return;

      // Ignore same-page navigation
      try {
        const target = new URL(href, window.location.origin);
        if (target.pathname === pathnameRef.current) return;
      } catch {
        return;
      }

      if (hideTimer.current) clearTimeout(hideTimer.current);
      setVisible(true);
    };

    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  return (
    <Fade in={visible} unmountOnExit timeout={{ enter: 100, exit: 300 }}>
      <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999, height: 3 }}>
        <LinearProgress
          sx={{
            height: 3,
            borderRadius: 0,
            bgcolor: 'rgba(0,191,165,0.15)',
            '& .MuiLinearProgress-bar': { bgcolor: '#00BFA5' },
            '& .MuiLinearProgress-bar2': { bgcolor: 'rgba(0,191,165,0.4)' },
          }}
        />
      </Box>
    </Fade>
  );
}
