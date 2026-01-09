import { Meta, StoryObj } from '@storybook/react';
import { ContactForm } from './ContactForm';

const meta: Meta<typeof ContactForm> = {
  title: 'Molecules/ContactForm',
  component: ContactForm,
  globals: {
    backgrounds: { value: 'grey' },
  },
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {};
