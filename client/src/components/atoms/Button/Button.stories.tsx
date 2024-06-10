import type { Meta, StoryObj } from '@storybook/react';

import { CustomButton } from './Button';
import { ButtonProps } from './Button.props';

const meta: Meta<typeof CustomButton> = {
  title: 'Atoms/Button',
  component: CustomButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    labelText: 'Hello World!',
  },
};
