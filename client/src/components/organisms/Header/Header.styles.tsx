import { AppBar, Drawer, styled } from '@mui/material';

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
  transition: 'height 0.3s ease-in-out, background-color 0.3s ease-in-out',
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
