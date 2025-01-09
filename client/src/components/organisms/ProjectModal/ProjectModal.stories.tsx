import { Meta, StoryObj } from '@storybook/react';
import { RICH_TEXT_MOCK } from '~/components/atoms/RichText/RichText.mocks';
import { ProjectModal } from './ProjectModal';
import { ProjectModalProps } from './ProjectModal.types';
import { PROJECT_MOCK } from './ProjectModal.mocks';

const meta: Meta<typeof ProjectModal> = {
  title: 'Organisms/ProjectModal',
  component: ProjectModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<ProjectModalProps>;

export const Primary: Story = {
  args: {
    open: true,
    handleClose: () => {},
    project: PROJECT_MOCK,
    isLast: false,
    isFirst: false,
    onPrev: () => {},
    onNext: () => {},
  },
};
