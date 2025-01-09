import { Box, styled } from '@mui/material';

export const StyledImage = styled('img')(() => ({ width: '100%' }));

export const Carousel = styled(Box)(({ theme }) => ({
  width: '80%',
  margin: 'auto',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    marginTop: theme.spacing(4),
  },
}));
