import { Meta, StoryObj } from '@storybook/react';
import { SOCIAL_MEDIAS_MOCK } from '~/components/organisms/Header/Header.mocks';
import { HomeHeader } from './HomeHeader';
import { HomeHeaderProps } from './HomeHeader.types';

const meta: Meta<typeof HomeHeader> = {
  title: 'Molecules/HomeHeader',
  component: HomeHeader,
  parameters: {
    backgrounds: {
      values: [{ name: 'Grey', value: 'grey' }],
      default: 'Grey',
    },
  },
};

export default meta;

type Story = StoryObj<HomeHeaderProps>;

export const Primary: Story = {
  args: {
    title: 'Hello World!',
    subtitle: 'This is a nice subtitle!',
    socialMedia: SOCIAL_MEDIAS_MOCK,
    children: <p>This is a child</p>,
  },
};
