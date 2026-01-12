import type { Meta, StoryObj } from '@storybook/nextjs';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Atoms/Footer',
  component: Footer,
  parameters: {
    nextjs: {
      router: {
        locale: 'en',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {
  globals: {
    backgrounds: { value: 'light' },
  },
};
