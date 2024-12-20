import { Meta, StoryObj } from '@storybook/react';
import { InViewFadeIn } from './InViewFadeIn';
import { InViewFadeInProps } from './InViewFadeIn.types';

const meta: Meta<typeof InViewFadeIn> = {
  title: 'Templates/InViewFadeIn',
  component: InViewFadeIn,
  parameters: {
    layout: 'centered',
    backgrounds: {
      values: [{ name: 'White', value: '#ffffff' }],
      default: 'White',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<InViewFadeInProps>;

export const Primary: Story = {
  args: {
    children: (
      <div
        style={{
          backgroundColor: 'black',
          padding: '20px',
          textAlign: 'center',
          color: 'white',
        }}
      >
        This element fades in when in view!
      </div>
    ),
    threshold: 0.5,
    delayTime: 0.5,
    index: 1,
  },
};
