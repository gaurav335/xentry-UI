'use client';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

// ─── Column definition ────────────────────────────────────────────────────────
export interface Column<T = Record<string, unknown>> {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string | number;
  hideOnMobile?: boolean;
  render?: (row: T, index: number) => React.ReactNode;
}

// ─── Pagination ───────────────────────────────────────────────────────────────
function PaginationBtn({ page, active, onClick }: { page: number | string; active?: boolean; onClick?: () => void }) {
  return (
    <Box component="button" onClick={onClick} sx={{
      width: 30, height: 30, borderRadius: '6px',
      border: '1.5px solid', borderColor: active ? '#1B4F8A' : '#D1D5DB',
      bgcolor: active ? '#1B4F8A' : '#fff', color: active ? '#fff' : '#3D4348',
      fontSize: 13, fontWeight: active ? 500 : 400,
      cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {page}
    </Box>
  );
}

// ─── Toolbar wrapper ──────────────────────────────────────────────────────────
export function TableToolbar({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{
      display: 'flex', alignItems: { xs: 'stretch', sm: 'center' },
      flexDirection: { xs: 'column', sm: 'row' },
      gap: 1.25, px: { xs: 1.5, sm: 2.25 }, py: 1.75,
      borderBottom: '1px solid #D1D5DB', flexWrap: 'wrap',
    }}>
      {children}
    </Box>
  );
}

// ─── Search input ─────────────────────────────────────────────────────────────
const SearchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

export function SearchBar({ placeholder }: { placeholder?: string }) {
  return (
    <TextField size="small" placeholder={placeholder ?? 'Search…'}
      sx={{ width: { xs: '100%', sm: 220 }, '& .MuiOutlinedInput-root': { fontSize: 13, bgcolor: '#F9FAFB', height: 34 } }}
      slotProps={{ input: { startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment> } }}
    />
  );
}

// ─── Filter select ────────────────────────────────────────────────────────────
export interface FilterOption { value: string; label: string }

export function FilterSelect({ value, options, minWidth = 120 }: { value: string; options: FilterOption[]; minWidth?: number }) {
  return (
    <Select size="small" defaultValue={value}
      sx={{ fontSize: 13, bgcolor: '#F9FAFB', height: 34, minWidth: { xs: '100%', sm: minWidth } }}>
      {options.map((o) => <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>)}
    </Select>
  );
}

// ─── Main DataTable ───────────────────────────────────────────────────────────
interface DataTableProps<T = Record<string, unknown>> {
  columns: Column<T>[];
  rows: T[];
  toolbar?: React.ReactNode;
  pageInfo?: string;
  totalPages?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  getRowOpacity?: (row: T) => number;
  onRowClick?: (row: T) => void;
  emptyText?: string;
}

export default function DataTable<T = Record<string, unknown>>({
  columns, rows, toolbar, pageInfo, totalPages = 1, currentPage = 1,
  onPageChange, getRowOpacity, onRowClick, emptyText = 'No records found.',
}: DataTableProps<T>) {
  return (
    <Box sx={{ bgcolor: '#fff', border: '1.5px solid #D1D5DB', borderRadius: '10px', overflow: 'hidden' }}>
      {toolbar}

      {/* Horizontal scroll on mobile */}
      <Box sx={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <Table sx={{ minWidth: { xs: 500, sm: 'auto' } }}>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={col.key} sx={{ width: col.width, display: col.hideOnMobile ? { xs: 'none', sm: 'table-cell' } : undefined }}>
                  {col.label}{col.sortable ? ' ↕' : ''}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} sx={{ textAlign: 'center', py: 5, color: '#6B7280' }}>
                  {emptyText}
                </TableCell>
              </TableRow>
            ) : (
              rows.map((row, i) => (
                <TableRow key={i}
                  sx={{ opacity: getRowOpacity ? getRowOpacity(row) : 1, cursor: onRowClick ? 'pointer' : undefined }}
                  onClick={() => onRowClick?.(row)}
                >
                  {columns.map((col) => (
                    <TableCell key={col.key} sx={{ display: col.hideOnMobile ? { xs: 'none', sm: 'table-cell' } : undefined }}>
                      {col.render ? col.render(row, i) : String((row as Record<string, unknown>)[col.key] ?? '')}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Box>

      {/* Footer */}
      {(pageInfo || totalPages > 1) && (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: { xs: 1.5, sm: 2.25 }, py: 1.5, borderTop: '1px solid #D1D5DB', bgcolor: '#F9FAFB', flexWrap: 'wrap', gap: 1 }}>
          <Typography sx={{ fontSize: 13, color: '#6B7280' }}>{pageInfo}</Typography>
          {totalPages > 1 && (
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <PaginationBtn key={p} page={p} active={p === currentPage} onClick={() => onPageChange?.(p)} />
              ))}
              <PaginationBtn page="→" onClick={() => onPageChange?.((currentPage % totalPages) + 1)} />
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
}
