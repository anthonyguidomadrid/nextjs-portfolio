import { Alert, Button, styled } from '@mui/material';

export const StyledForm = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}));

export const StyledAlert = styled(Alert)(() => ({ width: '100%' }));

export const PrivacyPolicyButton = styled(Button)(() => ({
  textTransform: 'none',
  padding: 0,
  fontSize: 'inherit',
}));
