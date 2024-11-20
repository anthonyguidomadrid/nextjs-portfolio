import { IconButton, Button, Box } from '@mui/material';
import React from 'react';
import { HeaderProps } from './Header.props';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import { LanguageSwitcher } from '~/components/atoms/LanguageSwitcher';
import {
  DesktopMenuWrapper,
  MobileMenuWrapper,
  NavBar,
  StyledDrawer,
  StyledToolBar,
} from './Header.styles';
import Image from 'next/image';
import { Drawer } from './components/Drawer';
import { DesktopMenuItems } from './components/DesktopMenuItems';
import { HomeHeader } from './components/HomeHeader';

export const Header: React.FC<HeaderProps> = ({
  menuItems,
  title,
  subtitle,
  socialMedia,
}) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setMobileOpen(false);
  };

  if (isHomePage) {
    return (
      <NavBar isHomePage={true}>
        <HomeHeader title={title} subtitle={subtitle} socialMedia={socialMedia}>
          <DesktopMenuItems
            menuItems={menuItems}
            handleNavigation={handleNavigation}
          />
        </HomeHeader>
      </NavBar>
    );
  }

  return (
    <>
      <NavBar isHomePage={false}>
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
            <DesktopMenuItems
              menuItems={menuItems}
              handleNavigation={handleNavigation}
            />
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
        <Drawer
          handleDrawerToggle={handleDrawerToggle}
          menuItems={menuItems}
          handleNavigation={handleNavigation}
        />
      </StyledDrawer>
    </>
  );
};
