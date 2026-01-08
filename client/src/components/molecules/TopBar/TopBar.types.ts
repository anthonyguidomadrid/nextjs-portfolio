import { MenuItem } from '~/generated/graphql';

export type TopBarProps = {
  handleNavigation: (_path: string) => void;
  menuItems: MenuItem[];
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
};
