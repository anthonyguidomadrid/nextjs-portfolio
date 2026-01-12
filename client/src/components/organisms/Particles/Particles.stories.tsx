import { Meta, StoryObj } from '@storybook/nextjs';
import { Particles } from './Particles';
import { ParticlesProps } from './Particles.types';

const meta: Meta<typeof Particles> = {
  title: 'Organisms/Particles',
  component: Particles,
  globals: {
    backgrounds: { value: 'dark' },
  },
};

export default meta;

type Story = StoryObj<ParticlesProps>;

export const Home: Story = {
  args: {
    quantity: 100,
  },
};
