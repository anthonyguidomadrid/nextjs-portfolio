import { Meta, StoryObj } from '@storybook/nextjs';
import { PageWrapper } from './PageWrapper';
import { PageWrapperProps } from './PageWrapper.types';

const meta: Meta<typeof PageWrapper> = {
  title: 'Templates/PageWrapper',
  component: PageWrapper,
  parameters: {
    nextjs: {
      router: {
        pathname: '/about',
        locales: ['en', 'es', 'fr'],
        locale: 'en',
      },
    },
  },
};

export default meta;

type Story = StoryObj<PageWrapperProps>;

export const Primary: Story = {
  args: {
    children: <p>This is the page content</p>,
  },
};
