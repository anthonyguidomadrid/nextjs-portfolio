import { Divider, List, ListItem, ListItemText } from '@mui/material';
import { DrawerWrapper, StyledListItemButton } from './Drawer.styles';
import Image from 'next/image';
import { LanguageSwitcher } from '~/components/atoms';
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
};
