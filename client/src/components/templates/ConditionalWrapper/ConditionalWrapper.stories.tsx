import { Meta, StoryObj } from '@storybook/react';
import { ConditionalWrapper } from './ConditionalWrapper';
import { ConditionalWrapperProps } from './ConditionalWrapper.types';
import { Box } from '@mui/material';

const meta: Meta<typeof ConditionalWrapper> = {
  title: 'Templates/ConditionalWrapper',
  component: ConditionalWrapper,
  parameters: {
    backgrounds: {
      values: [{ name: 'Grey', value: 'grey' }],
      default: 'Grey',
    },
  },
};

export default meta;

type Story = StoryObj<ConditionalWrapperProps>;

export const Primary: Story = {
  args: {
    condition: true,
    children: <p>This is a child</p>,
    wrapper: ({ children, style }) => <Box {...style}>{children}</Box>,
    wrapperProps: {
      style: { backgroundColor: 'black', color: 'white', padding: '5px' },
    },
  },
};

export const NoWrapper: Story = {
  args: {
    condition: false,
    children: <p>This is a child</p>,
    wrapper: ({ children, style }) => <Box {...style}>{children}</Box>,
    wrapperProps: {
      style: { backgroundColor: 'black', color: 'white', padding: '5px' },
    },
  },
};
