import { MenuItemEntity } from '~/generated/graphql';

export type LayoutProps = {
  children: React.ReactNode;
  menuItems: MenuItemEntity[];
};
