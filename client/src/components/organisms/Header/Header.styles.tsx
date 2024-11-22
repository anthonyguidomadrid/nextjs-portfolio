import { AppBar, Box, Drawer, keyframes, styled, Toolbar } from '@mui/material';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const NavBar = styled(AppBar)<{ isHomePage: boolean }>(
  ({ theme, isHomePage }) => ({
    backgroundColor: theme.palette.background.black,
    zIndex: 1,
    height: isHomePage ? '100%' : '70px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    transition: 'height 0.3s ease-in-out',
  })
);

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

export const FadeInWrapper = styled(Box)(() => ({
  animation: `${fadeIn} 0.5s ease-in-out`,
}));
