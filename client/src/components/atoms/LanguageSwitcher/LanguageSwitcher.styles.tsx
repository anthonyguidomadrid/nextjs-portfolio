import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ButtonWrapper = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  '& > button:not(:last-child)': {
    borderRight: `1px solid ${theme.palette.common.white}`,
  },
}));

export const LocaleButton = styled(Button)(({ theme }) => ({
  minWidth: 0,
  padding: theme.spacing(0, 1),
  borderRadius: 0,
  color: theme.palette.common.white,
  fontSize: 12,
}));
