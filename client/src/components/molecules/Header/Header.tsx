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
import {
  DesktopMenuWrapper,
  DrawerWrapper,
  MenuButton,
  MobileMenuWrapper,
  NavBar,
  StyledDrawer,
  StyledListItemButton,
  StyledToolBar,
} from './Header.styles';
import Image from 'next/image';

export const Header: React.FC<HeaderProps> = ({ menuItems }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setMobileOpen(false);
  };

  const drawer = (
    <DrawerWrapper onClick={handleDrawerToggle} data-testid='mobile-drawer'>
      <Image
        src='/svg/white-logo.svg'
        alt='White Logo Drawer'
        height={50}
        width={50}
      />
      <Divider />
      <List>
        {menuItems.map(({ attributes }) => (
          <ListItem key={attributes?.path} disablePadding>
            <StyledListItemButton
              isCurrentPath={router.pathname === attributes?.path}
              onClick={() => handleNavigation(attributes?.path!)}
            >
              <ListItemText primary={attributes?.label} />
            </StyledListItemButton>
          </ListItem>
        ))}
      </List>
      <LanguageSwitcher />
    </DrawerWrapper>
  );

  return (
    <nav>
      <NavBar>
        <StyledToolBar>
          {/* Left-aligned Logo */}
          <Button onClick={() => handleNavigation('/')}>
            <Image
              src='/svg/white-logo.svg'
              alt='White Logo Header'
              height={50}
              width={50}
            />
          </Button>

          {/* Desktop Menu Items */}
          <DesktopMenuWrapper data-testid='desktop-menu'>
            <Box>
              {menuItems.map(({ attributes }) => (
                <MenuButton
                  isCurrentPath={router.pathname === attributes?.path}
                  key={attributes?.path}
                  onClick={() => handleNavigation(attributes?.path)}
                >
                  {attributes?.label}
                </MenuButton>
              ))}
            </Box>
            <LanguageSwitcher />
          </DesktopMenuWrapper>

          {/* Mobile Menu Icon on the Right */}
          <MobileMenuWrapper ml='auto'>
            <IconButton
              color='inherit'
              aria-label='open-drawer'
              edge='end'
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </MobileMenuWrapper>
        </StyledToolBar>
      </NavBar>

      {/* Drawer for Mobile View */}
      <StyledDrawer
        id='drawer'
        anchor='right'
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
  );
};
