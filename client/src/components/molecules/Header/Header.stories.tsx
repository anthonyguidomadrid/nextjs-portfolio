import { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { HeaderProps } from './Header.props';
import { MENU_ITEMS_MOCK } from './Header.mocks';

const meta: Meta<typeof Header> = {
  title: 'Molecules/Header',
  component: Header,
  parameters: {
    layout: 'centered',
    nextjs: {
      router: {
        locales: ['en', 'es', 'fr'],
        locale: 'en',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<HeaderProps>;

export const Primary: Story = {};
Primary.args = {
  menuItems: MENU_ITEMS_MOCK,
};
