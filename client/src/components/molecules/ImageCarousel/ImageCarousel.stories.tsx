import { Meta, StoryObj } from '@storybook/react';
import { ImageCarousel } from './ImageCarousel';
import { ImageCarouselProps } from './ImageCarousel.types';
import { PROJECT_MOCK } from '~/components/organisms/ProjectModal/ProjectModal.mocks';

const meta: Meta<typeof ImageCarousel> = {
  title: 'Molecules/ImageCarousel',
  component: ImageCarousel,
};

export default meta;

type Story = StoryObj<ImageCarouselProps>;

export const Primary: Story = {
  args: {
    images: PROJECT_MOCK.pictures.data,
  },
};
