import { Box, Button, styled } from '@mui/material';

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

export const SocialButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  minWidth: '0px',
  borderRadius: theme.spacing(4),
  margin: theme.spacing(1),
}));
