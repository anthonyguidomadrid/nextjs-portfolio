import { Divider, List, ListItem, ListItemText } from '@mui/material';
import { DrawerWrapper, StyledListItemButton } from './Drawer.styles';
import { LanguageSwitcher, Logo } from '~/components/atoms';
import { useRouter } from 'next/router';
import { DrawerProps } from './Drawer.types';

export const Drawer: React.FC<DrawerProps> = ({
  handleDrawerToggle,
  menuItems,
  handleNavigation,
}) => {
  const router = useRouter();

  return (
    <DrawerWrapper onClick={handleDrawerToggle} data-testid='mobile-drawer'>
      <Logo height={75} width={75} data-testid='main-logo-svg-drawer' />
      <Divider />
      <List>
        {menuItems.map(({ path, label }) => (
          <ListItem key={path} disablePadding>
            <StyledListItemButton
              isCurrentPath={router.pathname === path}
              onClick={(e) => {
                e.stopPropagation();
                handleNavigation(path!);
              }}
            >
              <ListItemText primary={label} />
            </StyledListItemButton>
          </ListItem>
        ))}
      </List>
      <LanguageSwitcher />
    </DrawerWrapper>
  );
};
