import { Box, styled } from '@mui/material';

export const HomeWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  alignItems: 'center',
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {
    alignItems: 'start',
    textAlign: 'left',
  },
}));
