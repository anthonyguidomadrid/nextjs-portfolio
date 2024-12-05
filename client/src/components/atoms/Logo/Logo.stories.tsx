import { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';
import { LogoProps } from './Logo.types';

const meta: Meta<typeof Logo> = {
  title: 'Atoms/Logo',
  component: Logo,
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

type Story = StoryObj<LogoProps>;

export const Primary: Story = {};

export const Animated: Story = {
  args: {
    shouldAnimate: true,
  },
};
