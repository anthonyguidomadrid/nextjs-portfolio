import { MenuItemEntity } from '~/generated/graphql';

export type TopBarProps = {
  handleNavigation: (_path: string) => void;
  menuItems: MenuItemEntity[];
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
};
