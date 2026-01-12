import { Meta, StoryObj } from '@storybook/nextjs';
import { NotFound } from './NotFound';

const meta: Meta<typeof NotFound> = {
  title: 'Templates/NotFound',
  component: NotFound,
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {};
