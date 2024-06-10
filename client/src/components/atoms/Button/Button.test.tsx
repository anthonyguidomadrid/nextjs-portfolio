import { screen } from '@testing-library/react';
import { CustomButton } from './Button';
import '@testing-library/jest-dom';
import { render } from '~/utils/test-utils';

describe('Home', () => {
  it('renders a heading', () => {
    render(<CustomButton labelText='custom label' />);
    expect(screen.getByRole('button', { name: 'custom label' })).toBeVisible();
  });
});
