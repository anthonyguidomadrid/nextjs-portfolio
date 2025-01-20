import { Meta, StoryObj } from '@storybook/react';
import { SOCIAL_MEDIAS_MOCK } from '~/components/organisms/Header/Header.mocks';
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
      data: {
        attributes: {
          url: '/uploads/encrudo_home_bc0702b101.jpg',
          alternativeText: 'Placeholder',
          hash: '',
          mime: '',
          name: '',
          provider: '',
          size: 0,
        },
      },
    },
  },
};
