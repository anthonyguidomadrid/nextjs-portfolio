import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { render } from '~/utils/test-utils';
import Home from '.';
import userEvent from '@testing-library/user-event';
import { HomeProps } from './index.props';

const DEFAULT_PROPS: HomeProps = {
  contactInformation: {
    data: {
      attributes: {
        Contact: {
          phone: '1234',
          email: 'hello@gmail.com',
          address: 'Madrid',
        },
      },
    },
  },
};

describe('Home', () => {
  it('renders a heading', async () => {
    render(<Home {...DEFAULT_PROPS} />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Welcome');
    const selectElement = screen.getByRole('combobox');
    await userEvent.selectOptions(selectElement, 'Español');
    expect(selectElement).toHaveValue('es');
  });
});
