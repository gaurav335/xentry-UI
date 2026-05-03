'use client';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

interface BaseModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  confirmLabel?: string;
  onConfirm?: () => void;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg';
}

export default function BaseModal({
  open, onClose, title, children, confirmLabel = 'Save', onConfirm, maxWidth = 'xs',
}: BaseModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth
      // Full-screen modal on very small phones (<400px) for better usability
      sx={{
        '& .MuiDialog-paper': {
          m: { xs: 1.5, sm: 2 },
          width: { xs: 'calc(100% - 24px)', sm: undefined },
          maxHeight: { xs: 'calc(100% - 48px)', sm: undefined },
        },
      }}
    >
      <DialogTitle sx={{ fontSize: 16, fontWeight: 600, color: '#1A1C1E', pb: 2, borderBottom: '1px solid #D1D5DB' }}>
        {title}
      </DialogTitle>
      <DialogContent sx={{ pt: '20px !important', px: { xs: 2, sm: 3 } }}>
        {children}
      </DialogContent>
      <DialogActions sx={{ px: { xs: 2, sm: 3 }, pb: 2.5, borderTop: '1px solid #D1D5DB', gap: 1.25 }}>
        <Button variant="outlined" onClick={onClose} sx={{ borderColor: '#D1D5DB', color: '#3D4348', fontSize: 13, height: 34 }}>
          Cancel
        </Button>
        {onConfirm && (
          <Button variant="contained" onClick={onConfirm} sx={{ bgcolor: '#002244', '&:hover': { bgcolor: '#001121' }, fontSize: 13, height: 34 }}>
            {confirmLabel}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
