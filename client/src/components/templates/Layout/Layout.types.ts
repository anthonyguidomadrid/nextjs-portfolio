import { Maybe, MenuItemEntity, SocialMedia } from '~/generated/graphql';

export type LayoutProps = {
  children: React.ReactNode;
  menuItems: MenuItemEntity[];
  title?: string;
  subtitle?: string;
  socialMedia?: Maybe<SocialMedia>;
};
