import { Maybe, MenuItem, SocialMedia } from '~/generated/graphql';

export type HeaderProps = {
  menuItems: MenuItem[];
  title: string;
  subtitle: string;
  socialMedia?: Maybe<SocialMedia>;
};
