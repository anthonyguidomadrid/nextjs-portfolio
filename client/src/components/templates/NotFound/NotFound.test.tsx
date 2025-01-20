import { screen, fireEvent } from '@testing-library/react';
import { NotFound } from './NotFound';
import { useRouter } from 'next/router';
import { render } from '~/utils/test-utils';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
jest.mock('react-slick', () => jest.fn(({ children }) => children));

describe('NotFound', () => {
  const push = jest.fn();
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const getButton = () => screen.getByRole('button');

  it('should render the title, subtitle, and button text correctly', () => {
    render(<NotFound />);

    expect(screen.getByText('404 - Page Not Found')).toBeVisible();
    expect(
      screen.getByText('Oops! The page you are looking for does not exist.')
    ).toBeVisible();

    expect(getButton()).toHaveTextContent('Go back home');
  });

  it('should navigate to the home page when the button is clicked', () => {
    render(<NotFound />);

    fireEvent.click(getButton());

    expect(push).toHaveBeenCalledWith('/');
  });
});
