import { HeaderProps } from '../../Header.props';

export type HomeHeaderProps = Pick<
  HeaderProps,
  'title' | 'subtitle' | 'socialMedia'
> & {
  children: React.ReactNode;
};
