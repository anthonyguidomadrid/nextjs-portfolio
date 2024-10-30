import { LayoutProps } from './Layout.props';

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div>header{children}footer</div>;
};
