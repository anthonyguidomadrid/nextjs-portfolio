import { Meta, StoryObj } from '@storybook/react';
import { PageWrapper } from './PageWrapper';
import { PageWrapperProps } from './PageWrapper.types';

const meta: Meta<typeof PageWrapper> = {
  title: 'Templates/PageWrapper',
  component: PageWrapper,
  parameters: {
    layout: 'centered',
    backgrounds: {
      values: [{ name: 'Grey', value: 'grey' }],
      default: 'Grey',
    },
    nextjs: {
      router: {
        pathname: '/about',
        locales: ['en', 'es', 'fr'],
        locale: 'en',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<PageWrapperProps>;

export const Primary: Story = {
  args: {
    children: <p>This is the page content</p>,
  },
};
