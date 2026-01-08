import { Maybe, MenuItem, SocialMedia } from '~/generated/graphql';

export type LayoutProps = {
  children: React.ReactNode;
  menuItems: MenuItem[];
  title?: string;
  subtitle?: string;
  socialMedia?: Maybe<SocialMedia>;
  className?: string;
};
