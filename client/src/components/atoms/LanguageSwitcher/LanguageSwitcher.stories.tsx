import { Meta, StoryObj } from '@storybook/react';
import { LanguageSwitcher } from './LanguageSwitcher';

const meta: Meta<typeof LanguageSwitcher> = {
  title: 'Atoms/LanguageSwitcher',
  component: LanguageSwitcher,
  parameters: {
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
};

export default meta;

type Story = StoryObj<{}>;

export const Primary: Story = {};
