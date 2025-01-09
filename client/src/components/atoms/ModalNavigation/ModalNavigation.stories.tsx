import { Meta, StoryObj } from '@storybook/react';
import { ModalNavigation } from './ModalNavigation';
import { ModalNavigationProps } from './ModalNavigation.types';

const meta: Meta<typeof ModalNavigation> = {
  title: 'Atoms/ModalNavigation',
  component: ModalNavigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<ModalNavigationProps>;

export const Primary: Story = {
  args: {
    isFirst: false,
    isLast: false,
    onPrev: () => {},
    onNext: () => {},
  },
};
