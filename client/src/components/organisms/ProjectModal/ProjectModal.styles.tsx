import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  styled,
} from '@mui/material';

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: theme.palette.common.black,
    backgroundImage: 'none',
    minHeight: '80vh',
  },
}));

export const MobileModalNavWrapper = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export const StyledDialogContentText = styled(DialogContentText)(
  ({ theme }) => ({
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  })
);

export const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
}));
