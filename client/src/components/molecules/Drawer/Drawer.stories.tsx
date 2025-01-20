import { Meta, StoryObj } from '@storybook/react';
import { DrawerProps } from './Drawer.types';
import { Drawer } from './Drawer';
import { MENU_ITEMS_MOCK } from '~/components/organisms/Header/Header.mocks';

const meta: Meta<typeof Drawer> = {
  title: 'Molecules/Drawer',
  component: Drawer,
  parameters: {
    backgrounds: {
      values: [{ name: 'Grey', value: 'grey' }],
      default: 'Grey',
    },
  },
};

export default meta;

type Story = StoryObj<DrawerProps>;

export const Primary: Story = {
  args: {
    menuItems: MENU_ITEMS_MOCK,
  },
};
