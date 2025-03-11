import { MenuItemEntity } from '~/generated/graphql';

export type TopBarProps = {
  handleNavigation: () => void;
  menuItems: MenuItemEntity[];
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
};
