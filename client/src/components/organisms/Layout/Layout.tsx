import { Header } from '~/components/molecules';
import { LayoutProps } from './Layout.props';
import { Footer } from '~/components/atoms/Footer';

export const Layout: React.FC<LayoutProps> = ({ children, menuItems }) => {
  return (
    <>
      <Header menuItems={menuItems} />
      {children}
      <Footer />
    </>
  );
};
