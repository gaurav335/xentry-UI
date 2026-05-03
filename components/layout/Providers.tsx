'use client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Suspense } from 'react';
import theme from '@/lib/theme';
import NavigationProgress from './NavigationProgress';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense>
        <NavigationProgress />
      </Suspense>
      {children}
    </ThemeProvider>
  );
}
