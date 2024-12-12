import { Meta, StoryObj } from '@storybook/react';
import { SkillItem } from './SkillItem';
import { ComponentMainSkill } from '~/generated/graphql';

const meta: Meta<typeof SkillItem> = {
  title: 'Atoms/SkillItem',
  component: SkillItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<ComponentMainSkill>;

export const Primary: Story = {
  args: {
    Name: 'Skill name',
    percentage: 95,
  },
};
