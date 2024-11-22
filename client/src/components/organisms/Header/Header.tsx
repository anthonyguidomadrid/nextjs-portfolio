import { IconButton, Button } from '@mui/material';
import { HeaderProps } from './Header.types';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import { LanguageSwitcher } from '~/components/atoms/LanguageSwitcher';
import { FadeInWrapper, NavBar, StyledDrawer } from './Header.styles';
import Image from 'next/image';
import { Drawer } from '~/components/molecules/Drawer';
import { DesktopMenuItems } from '~/components/atoms/DesktopMenuItems';
import { HomeHeader } from '~/components/molecules/HomeHeader';
import { useState } from 'react';
import { Topbar } from '~/components/molecules';

export const Header: React.FC<HeaderProps> = ({
  menuItems,
  title,
  subtitle,
  socialMedia,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setMobileOpen(false);
  };

  return (
    <nav>
      <NavBar isHomePage={isHomePage}>
        {isHomePage && (
          <FadeInWrapper>
            <HomeHeader
              title={title}
              subtitle={subtitle}
              socialMedia={socialMedia}
            >
              <DesktopMenuItems
                menuItems={menuItems}
                handleNavigation={handleNavigation}
              />
            </HomeHeader>
          </FadeInWrapper>
        )}
        {!isHomePage && (
          <Topbar
            handleNavigation={handleNavigation}
            menuItems={menuItems}
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
        )}
        {/* Drawer for Mobile View */}
        {!isHomePage && (
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
        )}
      </NavBar>
    </nav>
  );
};
