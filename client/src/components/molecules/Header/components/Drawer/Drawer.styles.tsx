import { Box, styled } from '@mui/material';

export const DrawerWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
  gap: theme.spacing(3),
}));
