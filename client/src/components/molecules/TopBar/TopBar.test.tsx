import { render } from '~/utils/test-utils';
import { Topbar } from './TopBar';
import { MENU_ITEMS_MOCK } from '~/components/organisms/Header/Header.mocks';
import { screen } from '@testing-library/react';

describe('TopBar', () => {
  const handleNavigation = jest.fn();
  const handleDrawerToggle = jest.fn();

  describe('Menu Open', () => {
    beforeEach(() => {
      render(
        <Topbar
          handleNavigation={handleNavigation}
          menuItems={MENU_ITEMS_MOCK}
          mobileOpen={true}
          handleDrawerToggle={handleDrawerToggle}
        />
      );
    });

    it('renders the logo', () => {
      expect(screen.getByAltText('White Logo Header')).toBeVisible();
    });

    it('renders a list menu items', () => {
      MENU_ITEMS_MOCK.forEach(({ attributes }) => {
        expect(screen.getByText(attributes?.label!)).toBeInTheDocument();
      });
    });

    it('does not render the hamburger menu', () => {
      expect(screen.queryByLabelText('open-drawer')).not.toBeInTheDocument();
    });
  });

  describe('Menu Closed', () => {
    beforeEach(() => {
      render(
        <Topbar
          handleNavigation={handleNavigation}
          menuItems={MENU_ITEMS_MOCK}
          mobileOpen={false}
          handleDrawerToggle={handleDrawerToggle}
        />
      );
    });

    it('renders the hamburger menu', () => {
      expect(screen.queryByLabelText('open-drawer')).toBeVisible();
    });
  });
});
