import { render, screen } from '~/utils/test-utils';
import { Logo } from './Logo';

describe('Logo', () => {
  it('displays an animated logo', () => {
    render(<Logo shouldAnimate={true} />);
    expect(screen.getByTestId('main-logo-svg')).toContainHTML(
      'stroke-animation'
    );
  });

  it('overwrite any svg icon option', () => {
    render(<Logo height={50} />);
    expect(screen.getByTestId('main-logo-svg')).toContainHTML('height="50"');
  });
});
