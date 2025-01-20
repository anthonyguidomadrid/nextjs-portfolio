import { Meta, StoryObj } from '@storybook/react';
import { MENU_ITEMS_MOCK } from '~/components/organisms/Header/Header.mocks';
import { Topbar } from './TopBar';
import { TopBarProps } from './TopBar.types';

const meta: Meta<typeof Topbar> = {
  title: 'Molecules/TopBar',
  component: Topbar,
  parameters: {
    backgrounds: {
      values: [{ name: 'Grey', value: 'grey' }],
      default: 'Grey',
    },
  },
};

export default meta;

type Story = StoryObj<TopBarProps>;

export const Primary: Story = {
  args: {
    menuItems: MENU_ITEMS_MOCK,
    mobileOpen: false,
  },
};

export const MobileOpen: Story = {
  args: {
    menuItems: MENU_ITEMS_MOCK,
    mobileOpen: true,
  },
};
