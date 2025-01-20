import type { Meta, StoryObj } from '@storybook/react';
import { CertificationItem } from './CertificationItem';
import { CertificationItemProps } from './CertificationItem.types';
import { CERTIFICATION_ITEM_MOCK } from './CertificationItem.mocks';

const meta: Meta<typeof CertificationItem> = {
  title: 'Atoms/CertificationItem',
  component: CertificationItem,
  parameters: {
    backgrounds: {
      values: [{ name: 'Black', value: '#000' }],
      default: 'Black',
    },
  },
};

export default meta;

type Story = StoryObj<CertificationItemProps>;

export const Primary: Story = {
  args: {
    ...CERTIFICATION_ITEM_MOCK,
  },
};
