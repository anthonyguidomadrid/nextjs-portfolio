import { Meta, StoryObj } from '@storybook/react';
import { PageTitle } from './PageTitle';
import { PageTitleProps } from './PageTitle.types';
import { RICH_TEXT_MOCK } from '~/components/atoms/RichText/RichText.mocks';

const meta: Meta<typeof PageTitle> = {
  title: 'Organisms/PageTitle',
  component: PageTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<PageTitleProps>;

export const MainTitle: Story = {
  args: {
    Title: 'This is the title',
    isMainTitle: true,
    subTitle: 'This is the subtitle',
    description: RICH_TEXT_MOCK,
    picture: {
      __typename: 'UploadFileEntityResponse',
      data: {
        __typename: 'UploadFileEntity',
        attributes: {
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
        },
      },
    },
    children: <p>This is a child</p>,
  },
};

export const SecondaryTitle: Story = {
  args: {
    Title: 'This is the title',
    subTitle: 'This is the subtitle',
  },
};
