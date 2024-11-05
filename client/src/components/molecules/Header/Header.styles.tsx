import {
  AppBar,
  Box,
  Button,
  Drawer,
  ListItemButton,
  styled,
  Toolbar,
} from '@mui/material';

export const NavBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

export const StyledToolBar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

export const DesktopMenuWrapper = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

export const MobileMenuWrapper = styled(Box)(({ theme }) => ({
  display: 'block',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  display: 'block',
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: 300,
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const StyledListItemButton = styled(ListItemButton)<{
  isCurrentPath: boolean;
}>(({ isCurrentPath, theme }) => ({
  textAlign: 'center',
  color: isCurrentPath ? theme.palette.primary.main : 'inherit',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -4,
    left: 0,
    width: '100%',
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
}));

export const MenuButton = styled(Button)<{ isCurrentPath: boolean }>(
  ({ isCurrentPath, theme }) => ({
    color: '#fff',
    position: 'relative',
    // Highlight the current path
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
    // Hover underline effect
    '&:hover::after': {
      transform: 'scaleX(1)',
      transformOrigin: 'bottom left',
    },
  })
);
