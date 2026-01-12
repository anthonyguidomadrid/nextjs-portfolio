import { PageWrapperProps } from './PageWrapper.types';
import { useRouter } from 'next/router';
import { StyledPageWrapper } from './PageWrapper.styles';
import { Fade, useMediaQuery } from '@mui/material';
import { ConditionalWrapper } from '../ConditionalWrapper/ConditionalWrapper';

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const router = useRouter();
  const prefersReducedMotion = useMediaQuery(
    '(prefers-reduced-motion: reduce)'
  );
  const isHomePage = router.pathname === '/';
  if (isHomePage) {
    return children;
  }
  return (
    <ConditionalWrapper
      wrapperProps={{ in: true, timeout: 2000 }}
      wrapper={Fade}
      condition={!prefersReducedMotion}
    >
      <StyledPageWrapper data-testid='page-wrapper'>
        {children}
      </StyledPageWrapper>
    </ConditionalWrapper>
  );
};
