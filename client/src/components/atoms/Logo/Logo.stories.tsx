import { Meta, StoryObj } from '@storybook/nextjs';
import { Logo } from './Logo';
import { LogoProps } from './Logo.types';

const meta: Meta<typeof Logo> = {
  title: 'Atoms/Logo',
  component: Logo,
  parameters: {
    backgrounds: {
      values: [{ name: 'Black', value: '#000' }],
      default: 'Black',
    },
  },
};

export default meta;

type Story = StoryObj<LogoProps>;

export const Primary: Story = {};

export const Animated: Story = {
  args: {
    shouldAnimate: true,
  },
};
