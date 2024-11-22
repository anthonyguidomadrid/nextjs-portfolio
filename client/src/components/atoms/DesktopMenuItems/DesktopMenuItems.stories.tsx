import type { Meta, StoryObj } from '@storybook/react';
import { DesktopMenuItems } from './DesktopMenuItems';
import { DesktopMenuItemsProps } from './DesktopMenuItems.types';
import { MENU_ITEMS_MOCK } from '~/components/organisms/Header/Header.mocks';

const meta: Meta<typeof DesktopMenuItems> = {
  title: 'Atoms/DesktopMenuItems',
  component: DesktopMenuItems,
  parameters: {
    layout: 'centered',
    backgrounds: {
      values: [{ name: 'Black', value: '#000' }],
      default: 'Black',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<DesktopMenuItemsProps>;

export const Primary: Story = {
  args: {
    menuItems: MENU_ITEMS_MOCK,
  },
};
