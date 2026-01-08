import { MenuItem } from '~/generated/graphql';

export type DrawerProps = {
  handleDrawerToggle: () => void;
  menuItems: MenuItem[];
  handleNavigation: (_path: string) => void;
};
