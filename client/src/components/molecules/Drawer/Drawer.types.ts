import { MenuItemEntity } from '~/generated/graphql';

export type DrawerProps = {
  handleDrawerToggle: () => void;
  menuItems: MenuItemEntity[];
  handleNavigation: (_path: string) => void;
};
