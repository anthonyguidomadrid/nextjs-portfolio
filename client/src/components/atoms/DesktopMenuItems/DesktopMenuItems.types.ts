import { MenuItemEntity } from '~/generated/graphql';

export type DesktopMenuItemsProps = {
  menuItems: MenuItemEntity[];
  handleNavigation: (_path: string) => void;
};
