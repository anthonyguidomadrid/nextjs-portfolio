import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: 'red',
  color: theme.palette.primary.main,
}));
