import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { render } from '~/utils/test-utils';
import Home from '.';
import userEvent from '@testing-library/user-event';

describe('Home', () => {
  it('renders a heading', async () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Hello, World!');
    const selectElement = screen.getByRole('combobox');
    await userEvent.selectOptions(selectElement, 'Español');
    expect(selectElement).toHaveValue('es');
  });
});
