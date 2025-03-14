import { Box, styled } from '@mui/material';

export const ParticlesWrapper = styled(Box)(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -10,
  overflow: 'hidden',
}));
