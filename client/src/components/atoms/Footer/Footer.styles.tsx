import { styled, Typography } from '@mui/material';

export const FooterTypography = styled(Typography)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  zIndex: 1201,
  textShadow: '1px 1px rgba(0, 0, 0, 0.5)',
}));
