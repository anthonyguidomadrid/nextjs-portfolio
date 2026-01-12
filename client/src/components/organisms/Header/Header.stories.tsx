import { Meta, StoryObj } from '@storybook/nextjs';
import { Header } from './Header';
import { HeaderProps } from './Header.types';
import { MENU_ITEMS_MOCK, SOCIAL_MEDIAS_MOCK } from './Header.mocks';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
};

export default meta;

type Story = StoryObj<HeaderProps>;

export const Home: Story = {};
Home.args = {
  menuItems: MENU_ITEMS_MOCK,
  title: 'Hello World!',
  subtitle: 'This is a nice subtitle',
  socialMedia: SOCIAL_MEDIAS_MOCK,
};

export const About: Story = {};
About.parameters = {
  nextjs: {
    router: {
      pathname: '/about',
      locales: ['en', 'es', 'fr'],
      locale: 'en',
    },
  },
};
About.args = {
  menuItems: MENU_ITEMS_MOCK,
  title: 'About Us',
  subtitle: 'Learn more about our company',
  socialMedia: SOCIAL_MEDIAS_MOCK,
};
