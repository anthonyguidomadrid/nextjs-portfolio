import { Meta, StoryObj } from '@storybook/react';
import { PortfolioCard } from './PortfolioCard';
import { PorfolioCardProps } from './PortfolioCard.types';

const meta: Meta<typeof PortfolioCard> = {
  title: 'Molecules/PortfolioCard',
  component: PortfolioCard,
  parameters: {
    backgrounds: {
      values: [{ name: 'Grey', value: 'grey' }],
      default: 'Grey',
    },
  },
};

export default meta;

type Story = StoryObj<PorfolioCardProps>;

export const Primary: Story = {
  args: {
    title: 'Hello World!',
    subTitle: 'This is a nice subtitle!',
    date: '2022-12-31',
    thumbnail: {
      url: 'https://res.cloudinary.com/dm1dwtqb3/image/upload/v1767609821/thumbnail_multipurpose_template_thumbnail_1884ca469e.jpg',
      alternativeText: 'Placeholder',
      hash: '',
      mime: '',
      name: '',
      provider: '',
      size: 0,
      documentId: '',
    },
  },
};
