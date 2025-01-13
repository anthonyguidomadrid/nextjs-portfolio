import { AppBar, Drawer, keyframes, styled } from '@mui/material';

export const NavBar = styled(AppBar)<{
  isHomePage: boolean;
  isScrolled: boolean;
}>(({ theme, isHomePage, isScrolled }) => ({
  backgroundColor: isScrolled
    ? theme.palette.background.default
    : theme.palette.background.black,
  backgroundImage: 'none',
  zIndex: 1,
  height: isHomePage ? '100%' : '70px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  transition: 'height 0.3s ease-in-out; color 0.5 ease-in-out',
}));

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  display: 'flex',
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: '80%',
    maxWidth: '500px',
    backgroundColor: theme.palette.common.black,
    backgroundImage: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));
