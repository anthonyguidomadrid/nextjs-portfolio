import { Button, styled } from '@mui/material';

export const MenuButton = styled(Button)<{ isCurrentPath: boolean }>(
  ({ isCurrentPath, theme }) => ({
    color: '#fff',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -4,
      left: 4,
      width: '50%',
      height: '2px',
      backgroundColor: theme.palette.primary.main,
      transform: isCurrentPath ? 'scaleX(1)' : 'scaleX(0)',
      transformOrigin: 'bottom right',
      transition: 'transform 0.3s ease-out',
    },
    '&:hover::after': {
      transform: 'scaleX(1)',
      transformOrigin: 'bottom left',
    },
  })
);
