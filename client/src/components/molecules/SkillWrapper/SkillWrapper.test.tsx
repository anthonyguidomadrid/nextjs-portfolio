import React from 'react';
import { render, screen } from '@testing-library/react';
import { SkillWrapper } from './SkillWrapper';

jest.mock('../../atoms/SkillItem/SkillItem', () => ({
  SkillItem: jest.fn(() => <div data-testid='SkillItem' />),
}));

beforeAll(() => {
  global.IntersectionObserver = class IntersectionObserver {
    observe = jest.fn();
    disconnect = jest.fn();
    unobserve = jest.fn();
    root = null;
    rootMargin = '';
    thresholds = [];
    takeRecords = jest.fn();
  };
});

describe('SkillWrapper', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders no skills when skills array is empty', () => {
    render(<SkillWrapper skills={[]} />);
    expect(screen.queryByTestId('SkillItem')).toBeNull();
  });

  it('renders multiple skills', () => {
    const skills = [
      { Name: 'React', percentage: 75, id: '1' },
      { Name: 'JavaScript', percentage: 90, id: '2' },
    ];

    render(<SkillWrapper skills={skills} />);
    expect(screen.getAllByTestId('SkillItem')).toHaveLength(2);
  });

  it('skips rendering for null or undefined skills', () => {
    const skills = [
      { Name: 'React', percentage: 75, id: '1' },
      null,
      null,
      { Name: 'JavaScript', percentage: 90, id: '2' },
    ];

    render(<SkillWrapper skills={skills} />);
    expect(screen.getAllByTestId('SkillItem')).toHaveLength(2);
  });
});
