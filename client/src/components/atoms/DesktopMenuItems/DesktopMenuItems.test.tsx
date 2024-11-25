import { render } from '~/utils/test-utils';
import { DesktopMenuItems } from './DesktopMenuItems';
import { MENU_ITEMS_MOCK } from '~/components/organisms/Header/Header.mocks';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('DesktopMenuItems', () => {
  const handleNavigation = jest.fn();

  beforeEach(() => {
    render(
      <DesktopMenuItems
        menuItems={MENU_ITEMS_MOCK}
        handleNavigation={handleNavigation}
      />
    );
  });

  it('renders a list of menu items', () => {
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
});
