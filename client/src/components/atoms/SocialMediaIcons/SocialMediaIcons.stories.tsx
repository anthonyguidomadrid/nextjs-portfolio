import { Meta, StoryObj } from '@storybook/react';
import { SocialMediaIcons } from './SocialMediaIcons';
import { SocialMediaIconsProps } from './SocialMediaIcons.types';
import { SOCIAL_MEDIA_MOCK } from './SocialMediaIcons.mocks';

const meta: Meta<typeof SocialMediaIcons> = {
  title: 'Atoms/SocialMediaIcons',
  component: SocialMediaIcons,
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

type Story = StoryObj<SocialMediaIconsProps>;

export const Primary: Story = {
  args: {
    socialMedia: SOCIAL_MEDIA_MOCK,
  },
};
