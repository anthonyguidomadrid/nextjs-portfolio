import { Meta, StoryObj } from '@storybook/react';
import { Particles } from './Particles';
import { ParticlesProps } from './Particles.types';

const meta: Meta<typeof Particles> = {
  title: 'Organisms/Particles',
  component: Particles,
  parameters: {
    backgrounds: {
      values: [{ name: 'Black', value: '#000' }],
      default: 'Black',
    },
  },
};

export default meta;

type Story = StoryObj<ParticlesProps>;

export const Home: Story = {
  args: {
    quantity: 100,
  },
};
