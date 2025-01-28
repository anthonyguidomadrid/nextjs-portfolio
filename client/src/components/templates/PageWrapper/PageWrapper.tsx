import { PageWrapperProps } from './PageWrapper.types';
import { useRouter } from 'next/router';
import { StyledPageWrapper } from './PageWrapper.styles';
// import { Fade } from '@mui/material';

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  if (isHomePage) {
    return children;
  }
  return (
    // <Fade in={true} timeout={2000}>
      <StyledPageWrapper data-testid='page-wrapper'>
        {children}
      </StyledPageWrapper>
    // </Fade>
  );
};
