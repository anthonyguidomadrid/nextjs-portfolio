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
        {menuItems.map(({ attributes }) => (
          <ListItem key={attributes?.path} disablePadding>
            <StyledListItemButton
              isCurrentPath={router.pathname === attributes?.path}
              onClick={(e) => {
                e.stopPropagation();
                handleNavigation(attributes?.path!);
              }}
            >
              <ListItemText primary={attributes?.label} />
            </StyledListItemButton>
          </ListItem>
        ))}
      </List>
      <LanguageSwitcher />
    </DrawerWrapper>
  );
};
