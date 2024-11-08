import { screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import { render } from '~/utils/test-utils';
import { Header } from './Header';
import { MENU_ITEMS_MOCK } from './Header.mocks';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Header', () => {
  const mockPush = jest.fn();

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
      render(<Header menuItems={MENU_ITEMS_MOCK} />);
    });

    it('renders the logo', () => {
      expect(screen.getByAltText('White Logo Header')).toBeVisible();
    });
  });
});
