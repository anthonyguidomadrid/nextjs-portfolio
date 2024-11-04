import { Header } from '~/components/molecules';
import { LayoutProps } from './Layout.props';

export const Layout: React.FC<LayoutProps> = ({ children, menuItems }) => {
  return (
    <>
      <Header menuItems={menuItems} />
      {children}footer
    </>
  );
};
