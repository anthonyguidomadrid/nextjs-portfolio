import { PageWrapperProps } from './PageWrapper.types';
import { useRouter } from 'next/router';
import { StyledPageWrapper } from './PageWrapper.styles';

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  if (isHomePage) {
    return children;
  }

  return (
    <StyledPageWrapper data-testid='page-wrapper'>{children}</StyledPageWrapper>
  );
};
