import { Meta, StoryObj } from '@storybook/react';
import { NotFound } from './NotFound';

const meta: Meta<typeof NotFound> = {
  title: 'Templates/NotFound',
  component: NotFound,
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {};
