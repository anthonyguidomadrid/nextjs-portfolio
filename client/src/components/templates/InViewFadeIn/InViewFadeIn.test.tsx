import { screen } from '@testing-library/react';
import { InViewFadeIn } from './InViewFadeIn';
import { render } from '~/utils/test-utils';

describe('InViewFadeIn', () => {
  beforeAll(() => {
    global.IntersectionObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
  });
  it('renders children correctly', () => {
    render(
      <InViewFadeIn index={0}>
        <div>Test Child</div>
      </InViewFadeIn>
    );

    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });
});
