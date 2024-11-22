import { MenuItemEntity } from '~/generated/graphql';

export type DrawerProps = {
  handleDrawerToggle: () => void;
  menuItems: MenuItemEntity[];
  handleNavigation: (path: string) => void;
};
