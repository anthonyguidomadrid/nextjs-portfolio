import { Box } from '@mui/material';
import { MenuButton } from './DesktopMenuItems.styles';
import { DesktopMenuItemsProps } from './DesktopMenuItems.types';
import { useRouter } from 'next/router';

export const DesktopMenuItems: React.FC<DesktopMenuItemsProps> = ({
  menuItems,
  handleNavigation,
}) => {
  const router = useRouter();
  return (
    <Box>
      {menuItems.map(({ path, label }) => (
        <MenuButton
          isCurrentPath={router.pathname === path}
          key={path}
          onClick={() => handleNavigation(path)}
        >
          {label}
        </MenuButton>
      ))}
    </Box>
  );
};
