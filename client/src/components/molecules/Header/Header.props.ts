import { MenuItemEntity } from '~/generated/graphql';

export type HeaderProps = {
  menuItems: MenuItemEntity[];
  window: () => Window;
};
