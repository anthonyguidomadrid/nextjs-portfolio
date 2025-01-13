import { styled } from '@mui/material';
import Button from '@mui/material/Button';

export const SocialButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  minWidth: '0px',
  borderRadius: theme.spacing(4),
  margin: theme.spacing(1),
}));
