import { render } from '~/utils/test-utils';
import { Footer } from './Footer';
import { screen } from '@testing-library/react';
import packageJson from '../../../../package.json';

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('displays the footer copyright', () => {
    expect(
      screen.getByText(
        `© ${new Date().getFullYear()} ${packageJson.siteName}. All rights reserved.`
      )
    ).toBeVisible();
  });
});
