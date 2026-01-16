import { Header } from '~/components/organisms';
import { LayoutProps } from './Layout.types';
import { Footer } from '~/components/atoms/Footer';
import { PageWrapper } from '../PageWrapper';
import { Box } from '@mui/material';
import dynamic from 'next/dynamic';

const Particles = dynamic(
  () => import('~/components/organisms/Particles').then((m) => m.Particles),
  { ssr: false }
);

export const Layout: React.FC<LayoutProps> = ({
  children,
  menuItems,
  title = '',
  subtitle = '',
  socialMedia,
  className,
}) => {
  return (
    <Box className={className}>
      <Header
        menuItems={menuItems}
        title={title}
        subtitle={subtitle}
        socialMedia={socialMedia}
      />
      <PageWrapper>{children}</PageWrapper>
      <Particles quantity={200} />
      <Footer />
    </Box>
  );
};
