import { screen, fireEvent, within } from '@testing-library/react';
import { useRouter } from 'next/router';
import { render } from '~/utils/test-utils';
import { Header } from './Header';
import { MENU_ITEMS_MOCK } from './Header.mocks';
import userEvent from '@testing-library/user-event';
import { HeaderProps } from './Header.types';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('react-slick', () => {
  return jest.fn(({ children }) => (
    <div data-testid='mock-slider'>{children}</div>
  ));
});

const DEFAULT_PROPS: HeaderProps = {
  menuItems: MENU_ITEMS_MOCK,
  title: 'Hello World!',
  subtitle: 'This is a nice subtitle',
};

describe('Header', () => {
  const mockPush = jest.fn();

  describe('Home Page', () => {
    beforeEach(() => {
      mockPush.mockClear();
      (useRouter as jest.Mock).mockReturnValue({
        locales: ['en', 'es', 'fr'],
        locale: 'en',
        pathname: '/',
        asPath: '/',
        push: mockPush,
      });
      render(<Header {...DEFAULT_PROPS} />);
    });

    it('renders the title and subtitle', () => {
      expect(screen.getByText(DEFAULT_PROPS.title)).toBeVisible();
      expect(screen.getByText(DEFAULT_PROPS.subtitle)).toBeVisible();
    });
  });

  describe('Desktop', () => {
    beforeEach(() => {
      mockPush.mockClear();
      (useRouter as jest.Mock).mockReturnValue({
        locales: ['en', 'es', 'fr'],
        locale: 'en',
        pathname: '/test',
        asPath: '/test',
        push: mockPush,
      });
      render(<Header {...DEFAULT_PROPS} />);
    });

    const getDesktopMenu = () => screen.getByTestId('desktop-menu');

    it('renders the logo', () => {
      expect(screen.getByTestId('main-logo-svg')).toBeVisible();
    });

    it('displays all menu item labels', () => {
      MENU_ITEMS_MOCK.forEach((item) => {
        expect(
          within(getDesktopMenu()).getByText(item.attributes?.label!)
        ).toBeInTheDocument();
      });
    });

    it('displays the Language Switcher', () => {
      expect(
        within(getDesktopMenu()).getByTestId('language-switcher')
      ).toBeInTheDocument();
    });

    it('calls the push method of the router with the right path', async () => {
      const menuItem = MENU_ITEMS_MOCK[3];
      await userEvent.click(
        within(getDesktopMenu()).getByText(menuItem.attributes?.label!)
      );
      expect(mockPush).toHaveBeenCalledWith(menuItem.attributes?.path);
    });
  });

  describe('Mobile', () => {
    beforeEach(() => {
      mockPush.mockClear();
      (useRouter as jest.Mock).mockReturnValue({
        locales: ['en', 'es', 'fr'],
        locale: 'en',
        pathname: '/test',
        asPath: '/test',
        push: mockPush,
      });

      window.innerWidth = 600;
      fireEvent(window, new Event('resize'));
      render(<Header {...DEFAULT_PROPS} />);
    });

    const getMobileMenu = () => screen.getByTestId('mobile-drawer');

    const toogleMenu = () =>
      userEvent.click(screen.getByRole('button', { name: 'open-drawer' }));

    it('does not render the drawer when the menu is closed', () => {
      expect(screen.getByTestId('mobile-drawer')).not.toBeVisible();
    });

    it('renders the drawer when the menu is open', async () => {
      await toogleMenu();
      expect(screen.getByTestId('mobile-drawer')).toBeVisible();
    });

    it('it renders the logo when menu is open', async () => {
      await toogleMenu();
      expect(screen.getByTestId('main-logo-svg')).toBeVisible();
    });

    it('it displays all menu item labels when menu is open', async () => {
      await toogleMenu();
      MENU_ITEMS_MOCK.forEach((item) => {
        expect(
          within(getMobileMenu()).getByText(item.attributes?.label!)
        ).toBeVisible();
      });
    });

    it('it displays the Language Switcher when menu is open', async () => {
      await toogleMenu();
      expect(
        within(getMobileMenu()).getByTestId('language-switcher')
      ).toBeVisible();
    });

    it('calls the push method of the router with the right path', async () => {
      const menuItem = MENU_ITEMS_MOCK[3];
      await toogleMenu();
      await userEvent.click(
        within(getMobileMenu()).getByText(menuItem.attributes?.label!)
      );
      expect(mockPush).toHaveBeenCalledWith(menuItem.attributes?.path);
    });
  });
});
