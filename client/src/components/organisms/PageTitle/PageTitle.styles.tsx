import { Box, styled, Typography } from '@mui/material';
import Image from 'next/image';

export const StyledImage = styled(Image)(() => ({
  width: '100%',
  height: 'auto',
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  paddingBottom: theme.spacing(1),
  marginBottom: theme.spacing(2),
  pb: 1,
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '0%',
    width: '80%',
    borderBottom: `1px solid ${theme.palette.primary.main}`,
  },
}));

export const StyledWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(5),
}));
