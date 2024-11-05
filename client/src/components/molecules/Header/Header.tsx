import {
  IconButton,
  Button,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import React from 'react';
import { HeaderProps } from './Header.props';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import { LanguageSwitcher } from '~/components/atoms/LanguageSwitcher';
import WhiteLogo from '/public/svg/white-logo.svg';
import {
  DesktopMenuWrapper,
  MenuButton,
  MobileMenuWrapper,
  NavBar,
  StyledDrawer,
  StyledListItemButton,
  StyledToolBar,
} from './Header.styles';

export const Header: React.FC<HeaderProps> = ({ menuItems, window }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavigation = (path?: string) => {
    if (!path) return;
    router.push(path);
    setMobileOpen(false); // Close the drawer on mobile after navigation
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <WhiteLogo />
      <Divider />
      <List>
        {menuItems.map(({ attributes }) => (
          <ListItem key={attributes?.path} disablePadding>
            <StyledListItemButton
              isCurrentPath={router.pathname === attributes?.path}
              onClick={() => handleNavigation(attributes?.path)}
            >
              <ListItemText primary={attributes?.label} />
            </StyledListItemButton>
          </ListItem>
        ))}
        <LanguageSwitcher />
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <NavBar>
        <StyledToolBar>
          {/* Left-aligned Logo or Name */}
          <Button onClick={() => handleNavigation('/')}>
            <WhiteLogo />
          </Button>

          {/* Desktop Menu Items */}
          <DesktopMenuWrapper>
            {menuItems.map(({ attributes }) => (
              <MenuButton
                isCurrentPath={router.pathname === attributes?.path}
                key={attributes?.path}
                onClick={() => handleNavigation(attributes?.path)}
              >
                {attributes?.label}
              </MenuButton>
            ))}
            <LanguageSwitcher />
          </DesktopMenuWrapper>

          {/* Mobile Menu Icon on the Right */}
          <MobileMenuWrapper ml='auto'>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='end'
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </MobileMenuWrapper>
        </StyledToolBar>
      </NavBar>

      {/* Drawer for Mobile View */}
      <nav>
        <StyledDrawer
          anchor='right'
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </StyledDrawer>
      </nav>
    </>
  );
};
