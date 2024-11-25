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
    expect(screen.getByAltText('White Logo Drawer')).toBeVisible();
  });

  it('renders a list menu items', () => {
    MENU_ITEMS_MOCK.forEach(({ attributes }) => {
      expect(screen.getByText(attributes?.label!)).toBeVisible();
    });
  });

  it('fires the handleNavigation function with the corresponding path when clicking on any specific menu item', async () => {
    const { attributes } = MENU_ITEMS_MOCK[2];
    await userEvent.click(
      screen.getByRole('button', { name: attributes?.label })
    );
    expect(handleNavigation).toHaveBeenCalledWith(attributes?.path);
  });

  it('fires the handleDrawerToogle function when clicking on the mobile drawer', async () => {
    const drawer = screen.getByTestId('mobile-drawer');
    await userEvent.click(drawer);
    expect(handleDrawerToggle).toHaveBeenCalledTimes(1);
  });
});
