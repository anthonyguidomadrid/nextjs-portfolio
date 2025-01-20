import type { Meta, StoryObj } from '@storybook/react';
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

export const Primary: Story = {};
