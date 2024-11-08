import { Meta, StoryObj } from '@storybook/react';
import { LanguageSwitcher } from './LanguageSwitcher';

const meta: Meta<typeof LanguageSwitcher> = {
  title: 'Atoms/LanguageSwitcher',
  component: LanguageSwitcher,
  parameters: {
    layout: 'centered',
    nextjs: {
      router: {
        locales: ['en', 'es', 'fr'],
        locale: 'en',
      },
    },
    backgrounds: {
      values: [{ name: 'Black', value: '#000' }],
      default: 'Black',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<{}>;

export const Primary: Story = {};
