import { Box, styled } from '@mui/material';
import Image from 'next/image';

export const StyledImage = styled(Image)(() => ({
  width: '100%',
  height: 'auto',
}));

export const Carousel = styled(Box)(({ theme }) => ({
  width: '80%',
  margin: 'auto',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    marginTop: theme.spacing(4),
  },
}));
