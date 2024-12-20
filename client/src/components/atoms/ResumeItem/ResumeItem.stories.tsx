import type { Meta, StoryObj } from '@storybook/react';
import { ResumeItem } from './ResumeItem';
import { ResumeItemProps } from './ResumeItem.types';
import { RESUME_ITEM_MOCK } from './ResumeItem.mocks';

const meta: Meta<typeof ResumeItem> = {
  title: 'Atoms/ResumeItem',
  component: ResumeItem,
  parameters: {
    layout: 'centered',
    nextjs: {
      router: {
        locales: ['en', 'es', 'fr'],
        locale: 'en',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<ResumeItemProps>;

export const Primary: Story = {
  args: {
    ...RESUME_ITEM_MOCK,
  },
};

export const NoLogo: Story = {
  args: {
    ...RESUME_ITEM_MOCK,
    logo: undefined,
  },
};

export const CurrentJob: Story = {
  args: {
    ...RESUME_ITEM_MOCK,
    endingDate: undefined,
  },
};
