import { PageWrapperProps } from './PageWrapper.types';
import { useRouter } from 'next/router';
import { StyledPageWrapper } from './PageWrapper.styles';
import { useMediaQuery } from '@mui/material';

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const router = useRouter();
  const prefersReducedMotion = useMediaQuery(
    '(prefers-reduced-motion: reduce)'
  );
  const isHomePage = router.pathname === '/';
  if (isHomePage) {
    return children;
  }

  const shouldAnimate = !prefersReducedMotion;
  return (
    <StyledPageWrapper data-testid='page-wrapper' shouldAnimate={shouldAnimate}>
      {children}
    </StyledPageWrapper>
  );
};
