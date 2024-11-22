import { HeaderProps } from '~/components/organisms/Header/Header.types';

export type HomeHeaderProps = Pick<
  HeaderProps,
  'title' | 'subtitle' | 'socialMedia'
> & {
  children: React.ReactNode;
};
