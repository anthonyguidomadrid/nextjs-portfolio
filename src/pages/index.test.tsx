import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { render } from '~/utils/test-utils';
import Home from '.';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Hello, World!')
  });
});
