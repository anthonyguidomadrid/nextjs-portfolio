import { Typography } from '@mui/material';
import { HomeHeaderProps } from './HomeHeader.types';
import { HomeWrapper } from './HomeHeader.styles';
import { Logo } from '~/components/atoms/Logo';
import { SocialMediaIcons } from '~/components/atoms/SocialMediaIcons/SocialMediaIcons';

export const HomeHeader: React.FC<HomeHeaderProps> = ({
  title,
  subtitle,
  socialMedia,
  children,
}) => {
  return (
    <HomeWrapper>
      <Logo height='115' width='115' shouldAnimate={true} />
      <Typography variant='h1'>{title}</Typography>
      <Typography variant='h2'>{subtitle}</Typography>
      {children}
      {socialMedia && <SocialMediaIcons socialMedia={socialMedia} />}
    </HomeWrapper>
  );
};
