import { MenuItemEntity } from '~/generated/graphql';

export type DesktopMenuItemsProps = {
  menuItems: MenuItemEntity[];
  handleNavigation: (path: string) => void;
};
