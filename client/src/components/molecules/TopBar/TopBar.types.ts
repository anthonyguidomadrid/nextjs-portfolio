import { MenuItemEntity } from '~/generated/graphql';

export type TopBarProps = {
  handleNavigation: (path: string) => void;
  menuItems: MenuItemEntity[];
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
};
