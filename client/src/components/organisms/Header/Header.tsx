import { HeaderProps } from './Header.types';
import { useRouter } from 'next/router';
import { NavBar, StyledDrawer } from './Header.styles';
import { Drawer } from '~/components/molecules/Drawer';
import { DesktopMenuItems } from '~/components/atoms/DesktopMenuItems';
import { HomeHeader } from '~/components/molecules/HomeHeader';
import { useState } from 'react';
import { Topbar } from '~/components/molecules';
import { useScroll } from '~/hooks/useScroll';

export const Header: React.FC<HeaderProps> = ({
  menuItems,
  title,
  subtitle,
  socialMedia,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const { isScrolled } = useScroll();
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
      <NavBar isHomePage={isHomePage} isScrolled={isScrolled}>
        {isHomePage && (
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
              keepMounted: true,
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
