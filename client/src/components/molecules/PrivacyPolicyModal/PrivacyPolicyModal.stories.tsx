import { Meta, StoryObj } from '@storybook/react';
import { PrivacyPolicyModal } from './PrivacyPolicyModal';
import { PrivacyPolicyModalProps } from './PrivacyPolicyModal.types';
import { PRIVACY_MODAL_CONTENT_MOCK } from './PrivacyPolicyModal.mock';
import { Button } from '@mui/material';
import { usePrivacyModal } from '~/hooks';

const meta: Meta<typeof PrivacyPolicyModal> = {
  title: 'Molecules/PrivacyPolicyModal',
  component: PrivacyPolicyModal,
};

export default meta;

type Story = StoryObj<PrivacyPolicyModalProps>;

export const Primary: Story = {
  render: (args) => {
    const { openModal } = usePrivacyModal();

    const handleOpen = () => openModal();

    return (
      <div>
        <Button variant='contained' onClick={handleOpen}>
          Open Privacy Policy Modal
        </Button>
        <PrivacyPolicyModal {...args} content={args.content} />
      </div>
    );
  },
  args: {
    content: PRIVACY_MODAL_CONTENT_MOCK,
  },
};
