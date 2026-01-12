import { Meta, StoryObj } from '@storybook/nextjs';
import { ProjectModal } from './ProjectModal';
import { ProjectModalProps } from './ProjectModal.types';
import { PROJECT_MOCK } from './ProjectModal.mocks';

const meta: Meta<typeof ProjectModal> = {
  title: 'Organisms/ProjectModal',
  component: ProjectModal,
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
