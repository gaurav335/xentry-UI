import AppShell from '@/components/layout/AppShell';
import { mainNavSections } from '@/lib/navConfig';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell sections={mainNavSections}>
      {children}
    </AppShell>
  );
}
