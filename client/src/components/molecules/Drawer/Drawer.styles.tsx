import { Box, ListItemButton, styled } from '@mui/material';

export const DrawerWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
  gap: theme.spacing(3),
}));

export const StyledListItemButton = styled(ListItemButton)<{
  isCurrentPath: boolean;
}>(({ isCurrentPath, theme }) => ({
  textAlign: 'center',
  color: isCurrentPath ? theme.palette.primary.main : 'inherit',
}));
