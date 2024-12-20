import { PageWrapper } from './PageWrapper';
import { useRouter } from 'next/router';
import { render } from '~/utils/test-utils';
import { screen } from '@testing-library/react';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('PageWrapper', () => {
  const mockUseRouter = useRouter as jest.Mock;

  it('should render children when on the home page', () => {
    mockUseRouter.mockReturnValue({ pathname: '/' });

    render(
      <PageWrapper>
        <div>Test Content</div>
      </PageWrapper>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should wrap children with Fade and StyledPageWrapper on other pages', () => {
    mockUseRouter.mockReturnValue({ pathname: '/other-page' });

    render(
      <PageWrapper>
        <div>Test Content</div>
      </PageWrapper>
    );

    const styledWrapper = screen.getByTestId('page-wrapper');
    expect(styledWrapper).toBeInTheDocument();

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
