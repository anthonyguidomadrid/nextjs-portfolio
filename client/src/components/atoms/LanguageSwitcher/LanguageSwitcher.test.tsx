import { screen, fireEvent } from '@testing-library/react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useRouter } from 'next/router';
import { render } from '~/utils/test-utils';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('LanguageSwitcher', () => {
  const mockPush = jest.fn();
  const getLocaleButton = (name: string) =>
    screen.queryByRole('button', { name });

  describe('With Locales', () => {
    beforeEach(() => {
      mockPush.mockClear();
      (useRouter as jest.Mock).mockReturnValue({
        locales: ['en', 'es', 'fr'],
        locale: 'en',
        pathname: '/test',
        asPath: '/test',
        push: mockPush,
      });
      render(<LanguageSwitcher />);
    });

    it('renders a button for each available locale except the current one', () => {
      expect(getLocaleButton('ES')).toBeVisible();
      expect(getLocaleButton('FR')).toBeVisible();
      expect(getLocaleButton('EN')).not.toBeInTheDocument();
    });

    it('calls router.push with the correct arguments when a locale button is clicked', () => {
      fireEvent.click(getLocaleButton('FR')!);
      expect(mockPush).toHaveBeenCalledWith('/test', '/test', { locale: 'fr' });
      fireEvent.click(getLocaleButton('ES')!);
      expect(mockPush).toHaveBeenCalledWith('/test', '/test', { locale: 'es' });
    });
  });

  describe('Without Locales', () => {
    beforeEach(() => {
      mockPush.mockClear();
      (useRouter as jest.Mock).mockReturnValue({
        locales: [],
        locale: 'en',
        pathname: '/test',
        asPath: '/test',
        push: mockPush,
      });
      render(<LanguageSwitcher />);
    });

    it('does not render any buttons if no locales are available', () => {
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
  });
});
