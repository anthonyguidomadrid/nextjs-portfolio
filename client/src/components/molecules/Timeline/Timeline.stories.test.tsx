import { screen } from '@testing-library/react';
import { Timeline } from './Timeline';
import { RESUME_ITEM_MOCK } from '~/components/atoms/ResumeItem/ResumeItem.mocks';
import { render } from '~/utils/test-utils';

describe('Timeline', () => {
  it('renders a list of resume items in the timeline', () => {
    const resumeItems = [RESUME_ITEM_MOCK, RESUME_ITEM_MOCK];

    render(<Timeline resumeItems={resumeItems} />);

    const timelineItems = screen.getAllByText(RESUME_ITEM_MOCK.title);
    expect(timelineItems.length).toBe(resumeItems.length);

    const timelineDots = screen.getAllByRole('link');
    expect(timelineDots.length).toBe(resumeItems.length);

    const timelineConnectors = screen.getAllByRole('img');
    expect(timelineConnectors.length).toBe(resumeItems.length);

    const timelineContents = screen.getAllByRole('heading');
    expect(timelineContents.length).toBe(resumeItems.length);
  });

  it('does not render anything when no resume items are provided', () => {
    render(<Timeline resumeItems={[]} />);

    expect(screen.queryByText('Resume Item')).not.toBeInTheDocument();
  });
});
