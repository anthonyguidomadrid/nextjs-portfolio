import { Meta, StoryObj } from '@storybook/react';
import { Layout } from './Layout';
import { LayoutProps } from './Layout.types';
import {
  MENU_ITEMS_MOCK,
  SOCIAL_MEDIAS_MOCK,
} from '~/components/organisms/Header/Header.mocks';

const meta: Meta<typeof Layout> = {
  title: 'Templates/Layout',
  component: Layout,
  parameters: {
    layout: 'centered',
    backgrounds: {
      values: [{ name: 'Grey', value: 'grey' }],
      default: 'Grey',
    },
    nextjs: {
      router: {
        pathname: '/about',
        locales: ['en', 'es', 'fr'],
        locale: 'en',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<LayoutProps>;

export const Primary: Story = {
  args: {
    children: <p>This is a child</p>,
    menuItems: MENU_ITEMS_MOCK,
    title: 'Hello World!',
    subtitle: 'This is a nice subtitle.',
    socialMedia: SOCIAL_MEDIAS_MOCK,
  },
};
