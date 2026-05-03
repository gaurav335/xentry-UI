'use client';
import { createContext, useContext } from 'react';

interface SidebarContextValue {
  openDrawer: () => void;
}

export const SidebarContext = createContext<SidebarContextValue>({ openDrawer: () => {} });
export const useSidebar = () => useContext(SidebarContext);
