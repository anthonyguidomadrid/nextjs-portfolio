import { PageWrapper } from './PageWrapper';
import { useRouter } from 'next/router';
import { Fade } from '@mui/material';
import { render } from '~/utils/test-utils';
import { screen } from '@testing-library/react';

// Mock the useRouter hook from next/router
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('PageWrapper', () => {
  const mockUseRouter = useRouter as jest.Mock;

  it('should render children when on the home page', () => {
    // Mock the router.pathname to be '/'
    mockUseRouter.mockReturnValue({ pathname: '/' });

    render(
      <PageWrapper>
        <div>Test Content</div>
      </PageWrapper>
    );

    // Expect the children to be rendered directly without the fade effect or StyledPageWrapper
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should wrap children with Fade and StyledPageWrapper on other pages', () => {
    // Mock the router.pathname to be a page other than '/'
    mockUseRouter.mockReturnValue({ pathname: '/other-page' });

    render(
      <PageWrapper>
        <div>Test Content</div>
      </PageWrapper>
    );

    // Expect that the StyledPageWrapper is used to wrap the children
    const styledWrapper = screen.getByTestId('styled-page-wrapper');
    expect(styledWrapper).toBeInTheDocument();

    // Expect the children content to be rendered inside StyledPageWrapper
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
