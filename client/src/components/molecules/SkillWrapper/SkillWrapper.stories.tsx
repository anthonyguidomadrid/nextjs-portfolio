import { Meta, StoryObj } from '@storybook/react';
import { SkillWrapper } from './SkillWrapper';
import { SKILLS_MOCK } from './SkillWrapper.mocks';
import { SkillWrapperProps } from './SkillWrapper.types';

const meta: Meta<typeof SkillWrapper> = {
  title: 'Molecules/SkillWrapper',
  component: SkillWrapper,
};

export default meta;

type Story = StoryObj<SkillWrapperProps>;

export const Primary: Story = {
  args: {
    skills: SKILLS_MOCK,
  },
};
