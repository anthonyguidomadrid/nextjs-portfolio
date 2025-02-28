import { Box, Dialog, DialogContent, Grid, styled } from '@mui/material';

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
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    maxHeight: '45vh',
  },
}));

export const StyledDialogContentText = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));
