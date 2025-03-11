import { act, screen } from '@testing-library/react';
import { SkillItem } from './SkillItem';
import { useInView } from 'react-intersection-observer';
import { render } from '~/utils/test-utils';

jest.mock('react-intersection-observer', () => ({
  useInView: jest.fn(),
}));

describe('SkillItem', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders skill name and percentage correctly', () => {
    const mockInView = jest.fn(() => ({
      ref: jest.fn(),
      inView: true,
    }));
    (useInView as jest.Mock).mockImplementation(mockInView);

    render(<SkillItem Name='React' percentage={75} id='1' />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('75 %')).toBeInTheDocument();
  });

  it('sets progress to the correct value when in view', () => {
    const mockInView = jest.fn(() => ({
      ref: jest.fn(),
      inView: true,
    }));
    (useInView as jest.Mock).mockImplementation(mockInView);

    jest.useFakeTimers();

    render(<SkillItem Name='JavaScript' percentage={90} id='1' />);
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '1'
    );

    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '90'
    );

    jest.useRealTimers();
  });

  it('does not set progress when not in view', () => {
    const mockInView = jest.fn(() => ({
      ref: jest.fn(),
      inView: false,
    }));
    (useInView as jest.Mock).mockImplementation(mockInView);

    render(<SkillItem Name='TypeScript' percentage={60} id='1' />);
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '1'
    );
  });

  it('handles missing percentage gracefully', () => {
    const mockInView = jest.fn(() => ({
      ref: jest.fn(),
      inView: true,
    }));
    (useInView as jest.Mock).mockImplementation(mockInView);

    render(<SkillItem Name='GraphQL' percentage={undefined} id='1' />);
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '1'
    );
    expect(screen.getByText('0 %')).toBeInTheDocument();
  });
});
