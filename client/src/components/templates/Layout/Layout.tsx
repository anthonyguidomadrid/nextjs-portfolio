import { Header, Particles } from '~/components/organisms';
import { LayoutProps } from './Layout.types';
import { Footer } from '~/components/atoms/Footer';
import { PageWrapper } from '../PageWrapper';

export const Layout: React.FC<LayoutProps> = ({
  children,
  menuItems,
  title = '',
  subtitle = '',
  socialMedia,
}) => {
  return (
    <>
      <Header
        menuItems={menuItems}
        title={title}
        subtitle={subtitle}
        socialMedia={socialMedia}
      />
      <PageWrapper>{children}</PageWrapper>
      <Particles quantity={100} />
      <Footer />
    </>
  );
};
