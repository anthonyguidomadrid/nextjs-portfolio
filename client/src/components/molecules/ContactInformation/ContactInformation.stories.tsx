import { Meta, StoryObj } from '@storybook/react';
import { ContactInformation } from './ContactInformation';
import { ContactInformationProps } from './ContactInformation.types';
import { CONTACT_INFORMATION_MOCK } from './ContactInformation.mocks';

const meta: Meta<typeof ContactInformation> = {
  title: 'Molecules/ContactInformation',
  component: ContactInformation,
  parameters: {
    backgrounds: {
      values: [{ name: 'Grey', value: 'grey' }],
      default: 'Grey',
    },
  },
};

export default meta;

type Story = StoryObj<ContactInformationProps>;

export const Primary: Story = {
  args: { ...CONTACT_INFORMATION_MOCK },
};
