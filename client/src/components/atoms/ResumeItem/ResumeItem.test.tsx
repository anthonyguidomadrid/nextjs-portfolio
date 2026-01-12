import { screen } from '@testing-library/react';
import { ResumeItem } from './ResumeItem';
import { RESUME_ITEM_MOCK } from './ResumeItem.mocks';
import { render } from '~/utils/test-utils';
import { formatDate } from '~/utils/formatDates';

describe('ResumeItem', () => {
  const companyLogo = RESUME_ITEM_MOCK.logo;

  const getCompanyLogo = () =>
    screen.queryByAltText(companyLogo?.alternativeText!);
  it('renders resume details correctly', () => {
    render(<ResumeItem {...RESUME_ITEM_MOCK} />);

    expect(screen.getByText(RESUME_ITEM_MOCK.title)).toBeVisible();

    expect(screen.getByText('December 2020 - December 2021')).toBeVisible();

    expect(
      screen.getByText(
        `${RESUME_ITEM_MOCK.company} (${RESUME_ITEM_MOCK.location})`
      )
    ).toBeVisible();

    expect(
      screen.getByText(RESUME_ITEM_MOCK.description[0].children[0].text)
    ).toBeVisible();

    expect(getCompanyLogo()).toBeVisible();
    expect(getCompanyLogo()).toHaveAttribute(
      'src',
      expect.stringContaining(encodeURIComponent(RESUME_ITEM_MOCK.logo!.url!))
    );

    const link = screen.getByRole('link');
    expect(link).toBeVisible();
    expect(link).toHaveAttribute('href', RESUME_ITEM_MOCK.link);
  });

  it('handles missing logo gracefully', () => {
    const { logo, ...mockWithoutLogo } = RESUME_ITEM_MOCK;
    render(<ResumeItem {...mockWithoutLogo} />);
    expect(getCompanyLogo()).not.toBeInTheDocument();
  });

  it('handles ongoing jobs without an ending date', () => {
    const mockWithoutEndingDate = {
      ...RESUME_ITEM_MOCK,
      endingDate: undefined,
    };
    render(<ResumeItem {...mockWithoutEndingDate} />);

    expect(
      screen.getByText(`${formatDate(RESUME_ITEM_MOCK.startingDate)} - Current`)
    ).toBeVisible();
  });
});
