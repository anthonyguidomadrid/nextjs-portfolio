import { MenuItem } from '~/generated/graphql';

export type DesktopMenuItemsProps = {
  menuItems: MenuItem[];
  handleNavigation: (_path: string) => void;
};
