import { Meta, StoryObj } from '@storybook/react';
import { RichText } from './RichText';
import { RichTextProps } from './RichText.types';
import { RICH_TEXT_MOCK } from './RichText.mocks';

const meta: Meta<typeof RichText> = {
  title: 'Atoms/RichText',
  component: RichText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<RichTextProps>;

export const Primary: Story = {
  args: {
    content: RICH_TEXT_MOCK,
  },
};
