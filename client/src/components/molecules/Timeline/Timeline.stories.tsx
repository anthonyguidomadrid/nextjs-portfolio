import { Meta, StoryObj } from '@storybook/react';
import { Timeline } from './Timeline';
import { TimelineProps } from './Timeline.types';
import { RESUME_ITEM_MOCK } from '~/components/atoms/ResumeItem/ResumeItem.mocks';

const meta: Meta<typeof Timeline> = {
  title: 'Molecules/Timeline',
  component: Timeline,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<TimelineProps>;

export const Primary: Story = {
  args: {
    resumeItems: Array(3).fill(RESUME_ITEM_MOCK),
  },
};
