import { Header } from '~/components/molecules';
import { LayoutProps } from './Layout.props';
import { Footer } from '~/components/atoms/Footer';
import Particles from '../Particles/Particles';

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
