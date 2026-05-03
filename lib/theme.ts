'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1B4F8A', dark: '#002244', light: '#2A6BB5', contrastText: '#fff' },
    secondary: { main: '#00BFA5', contrastText: '#fff' },
    background: { default: '#ECEEF1', paper: '#ffffff' },
    text: { primary: '#1A1C1E', secondary: '#6B7280' },
    success: { main: '#166534', light: '#DCFCE7', contrastText: '#fff' },
    error: { main: '#991B1B', light: '#FEE2E2', contrastText: '#fff' },
    warning: { main: '#92400E', light: '#FEF3C7', contrastText: '#fff' },
    info: { main: '#2A6BB5', light: '#D6E8FA', contrastText: '#fff' },
    grey: {
      50: '#F9FAFB',
      100: '#F3F5F7',
      300: '#D1D5DB',
      500: '#6B7280',
      700: '#3D4348',
      900: '#1A1C1E',
    },
  },
  typography: {
    fontFamily: '"DM Sans", "Inter", "Roboto", sans-serif',
    fontSize: 14,
    button: { textTransform: 'none', fontWeight: 500 },
  },
  shape: { borderRadius: 6 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 6, fontWeight: 500, fontSize: 13 },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: { borderRadius: 6, fontSize: 14 },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: { '& th': { backgroundColor: '#F9FAFB', fontWeight: 600, fontSize: 12, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.4px' } },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: { fontSize: 13.5, borderBottom: '1px solid #F3F5F7', padding: '11px 18px' },
        head: { padding: '9px 18px', borderBottom: '1px solid #D1D5DB' },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: { '&:hover td': { backgroundColor: '#EBF3FC' }, '&:last-child td': { borderBottom: 'none' } },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 20, fontWeight: 500, fontSize: 11.5, height: 22 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { border: '1.5px solid #D1D5DB', boxShadow: 'none', borderRadius: 10 },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: { borderRadius: 14, border: '1px solid #D1D5DB', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' },
      },
    },
  },
});

export default theme;
