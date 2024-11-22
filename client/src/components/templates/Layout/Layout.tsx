import { Header, Particles } from '~/components/organisms';
import { LayoutProps } from './Layout.types';
import { Footer } from '~/components/atoms/Footer';

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
      {children}
      <Particles quantity={100} />
      <Footer />
    </>
  );
};
