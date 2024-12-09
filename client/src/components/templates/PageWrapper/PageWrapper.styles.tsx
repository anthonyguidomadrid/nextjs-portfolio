import { Box, styled } from '@mui/material';

export const StyledPageWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(15),
  marginBottom: theme.spacing(10),
  maxWidth: '90%',
  padding: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    maxWidth: theme.breakpoints.values.sm,
    padding: theme.spacing(5),
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: theme.breakpoints.values.md,
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: theme.breakpoints.values.lg,
  },
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: theme.palette.background.black,
}));
