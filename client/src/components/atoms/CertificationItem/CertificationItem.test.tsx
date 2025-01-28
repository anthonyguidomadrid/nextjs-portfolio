import { screen } from '@testing-library/react';
import { CertificationItem } from './CertificationItem';
import { CERTIFICATION_ITEM_MOCK } from './CertificationItem.mocks';
import { formatDate } from '~/utils/formatDates';
import { render } from '~/utils/test-utils';

describe('CertificationItem', () => {
  it('renders certification details correctly', () => {
    render(<CertificationItem {...CERTIFICATION_ITEM_MOCK} />);

    expect(screen.getByText(CERTIFICATION_ITEM_MOCK.Name)).toBeVisible();

    expect(
      screen.getByText(formatDate(CERTIFICATION_ITEM_MOCK.date))
    ).toBeVisible();

    const linkElement = screen.getByRole('link', {
      name: 'Show credentials',
    });

    expect(linkElement).toBeVisible();
    expect(linkElement).toHaveAttribute('href', CERTIFICATION_ITEM_MOCK.link);

    const MOCKED_IMAGE = CERTIFICATION_ITEM_MOCK.logo?.data?.attributes;

    const imgElement = screen.getByAltText(MOCKED_IMAGE?.alternativeText!);
    expect(imgElement).toBeVisible();
    expect(imgElement).toHaveAttribute(
      'src',
      '/_next/image?url=%2Fuploads%2Foracle_logo_52cb563a57.jpg&w=256&q=75'
    );
    expect(imgElement).toHaveAttribute('height', `${MOCKED_IMAGE?.height}`);
    expect(imgElement).toHaveAttribute('width', `${MOCKED_IMAGE?.width}`);
  });
});
