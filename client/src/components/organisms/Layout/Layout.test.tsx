import { render } from '~/utils/test-utils';
import { Layout } from './Layout';
import { MENU_ITEMS_MOCK } from '~/components/molecules/Header/Header.mocks';
import { screen } from '@testing-library/react';

describe('Layout', () => {
  beforeEach(() => {
    render(
      <Layout menuItems={MENU_ITEMS_MOCK}>
        <p>This is my content</p>
      </Layout>
    );
  });

  it('render the header', () => {
    expect(screen.getByRole('navigation')).toBeVisible();
  });

  it('renders the content', () => {
    expect(screen.getByText('This is my content')).toBeVisible();
  });

  it('renders the footer', () => {
    expect(screen.getByRole('contentinfo')).toBeVisible();
  });
});
