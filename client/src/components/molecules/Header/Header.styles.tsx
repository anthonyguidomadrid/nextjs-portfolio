import {
  AppBar,
  Box,
  Button,
  Drawer,
  ListItemButton,
  styled,
  Toolbar,
} from '@mui/material';

export const NavBar = styled(AppBar)<{ isHomePage: boolean }>(
  ({ theme, isHomePage }) => ({
    backgroundColor: theme.palette.background.black,
    zIndex: 1,
    height: isHomePage ? '100%' : 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  })
);

export const StyledToolBar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

export const DesktopMenuWrapper = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    gap: theme.spacing(3),
  },
}));

export const MobileMenuWrapper = styled(Box)(({ theme }) => ({
  display: 'block',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  display: 'flex',
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: '80%',
    maxWidth: '500px',
    backgroundColor: theme.palette.background.black,
    color: theme.palette.common.white,
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
}));
