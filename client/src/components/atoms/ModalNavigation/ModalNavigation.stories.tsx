import { Meta, StoryObj } from '@storybook/nextjs';
import { ModalNavigation } from './ModalNavigation';
import { ModalNavigationProps } from './ModalNavigation.types';

const meta: Meta<typeof ModalNavigation> = {
  title: 'Atoms/ModalNavigation',
  component: ModalNavigation,
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

export const First: Story = {
  args: {
    isFirst: true,
    isLast: false,
    onPrev: () => {},
    onNext: () => {},
  },
};

export const Last: Story = {
  args: {
    isFirst: false,
    isLast: true,
    onPrev: () => {},
    onNext: () => {},
  },
};
