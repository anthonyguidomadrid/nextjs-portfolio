import { Maybe, MenuItemEntity, SocialMedia } from '~/generated/graphql';

export type HeaderProps = {
  menuItems: MenuItemEntity[];
  title: string;
  subtitle: string;
  socialMedia?: Maybe<SocialMedia>;
};
