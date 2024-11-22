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
      {menuItems.map(({ attributes }) => (
        <MenuButton
          isCurrentPath={router.pathname === attributes?.path}
          key={attributes?.path}
          onClick={() => handleNavigation(attributes?.path!)}
        >
          {attributes?.label}
        </MenuButton>
      ))}
    </Box>
  );
};
