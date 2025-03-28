import { Button, IconButton } from '@mui/material';
import {
  DesktopMenuWrapper,
  MobileMenuWrapper,
  StyledToolBar,
} from './TopBar.styles';
import { TopBarProps } from './TopBar.types';
import { DesktopMenuItems, LanguageSwitcher, Logo } from '~/components/atoms';
import MenuIcon from '@mui/icons-material/Menu';

export const Topbar: React.FC<TopBarProps> = ({
  handleNavigation,
  menuItems,
  mobileOpen,
  handleDrawerToggle,
}) => {
  return (
    <StyledToolBar>
      {/* Left-aligned Logo */}
      <Button onClick={() => handleNavigation('/')}>
        <Logo height={50} width={50} />
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
      {!mobileOpen && (
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
      )}
    </StyledToolBar>
  );
};
