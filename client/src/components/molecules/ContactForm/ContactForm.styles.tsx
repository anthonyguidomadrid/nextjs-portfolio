import { Alert, styled } from '@mui/material';

export const StyledForm = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}));

export const StyledAlert = styled(Alert)(() => ({ width: '100%' }));
