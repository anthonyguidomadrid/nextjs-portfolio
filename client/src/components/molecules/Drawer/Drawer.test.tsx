import { render } from '~/utils/test-utils';
import { Drawer } from './Drawer';
import { MENU_ITEMS_MOCK } from '~/components/organisms/Header/Header.mocks';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Drawer', () => {
  const handleNavigation = jest.fn();
  const handleDrawerToggle = jest.fn();
  beforeEach(() => {
    render(
      <Drawer
        handleNavigation={handleNavigation}
        handleDrawerToggle={handleDrawerToggle}
        menuItems={MENU_ITEMS_MOCK}
      />
    );
  });

  it('renders the logo', () => {
    expect(screen.getByTestId('main-logo-svg-drawer')).toBeVisible();
  });

  it('renders a list menu items', () => {
    MENU_ITEMS_MOCK.forEach((item) => {
      expect(screen.getByText(item.label)).toBeVisible();
    });
  });

  it('fires the handleNavigation function with the corresponding path when clicking on any specific menu item', async () => {
    const { label, path } = MENU_ITEMS_MOCK[2];
    await userEvent.click(
      screen.getByRole('button', { name: label })
    );
    expect(handleNavigation).toHaveBeenCalledWith(path);
  });

  it('fires the handleDrawerToogle function when clicking on the mobile drawer', async () => {
    const drawer = screen.getByTestId('mobile-drawer');
    await userEvent.click(drawer);
    expect(handleDrawerToggle).toHaveBeenCalledTimes(1);
  });
});
