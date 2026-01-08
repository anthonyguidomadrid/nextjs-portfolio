import { Meta, StoryObj } from '@storybook/react';
import { PageTitle } from './PageTitle';
import { PageTitleProps } from './PageTitle.types';
import { DESCRIPTION_MOCK } from '~/mocks';

const meta: Meta<typeof PageTitle> = {
  title: 'Organisms/PageTitle',
  component: PageTitle,
};

export default meta;

type Story = StoryObj<PageTitleProps>;

export const MainTitle: Story = {
  args: {
    title: 'This is the title',
    isMainTitle: true,
    subTitle: 'This is the subtitle',
    description: DESCRIPTION_MOCK,
    picture: {
      __typename: 'UploadFile',
      alternativeText: 'Anthony Guido Web Developer',
      url: '/uploads/anthony_guido_5b39ff917f.jpg',
      height: 2767,
      width: 2075,
      hash: '',
      mime: '',
      name: '',
      provider: '',
      size: 100,
      documentId: '',
    },
    children: <p>This is a child</p>,
  },
};

export const SecondaryTitle: Story = {
  args: {
    title: 'This is the title',
    subTitle: 'This is the subtitle',
  },
};
