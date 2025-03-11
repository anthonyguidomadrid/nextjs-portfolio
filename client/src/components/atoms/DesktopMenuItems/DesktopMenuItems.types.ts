import { MenuItemEntity } from '~/generated/graphql';

export type DesktopMenuItemsProps = {
  menuItems: MenuItemEntity[];
  handleNavigation: () => void;
};
