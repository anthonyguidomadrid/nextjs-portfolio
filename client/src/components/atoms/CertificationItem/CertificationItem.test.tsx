import { CertificationItem } from './CertificationItem';
import { CERTIFICATION_ITEM_MOCK } from './CertificationItem.mocks';
import { formatDate } from '~/utils/formatDates';
import { render } from '~/utils/test-utils';
import { screen } from '@testing-library/dom';

describe('CertificationItem', () => {
  it('renders certification details correctly', () => {
    render(<CertificationItem {...CERTIFICATION_ITEM_MOCK} />);

    expect(screen.getByText(CERTIFICATION_ITEM_MOCK.name)).toBeVisible();

    expect(
      screen.getByText(formatDate(CERTIFICATION_ITEM_MOCK.date))
    ).toBeVisible();

    const linkElement = screen.getByRole('link', {
      name: 'Show credentials',
    });

    expect(linkElement).toBeVisible();
    expect(linkElement).toHaveAttribute('href', CERTIFICATION_ITEM_MOCK.link);

    const MOCKED_IMAGE = CERTIFICATION_ITEM_MOCK.logo;

    const imgElement = screen.getByAltText(MOCKED_IMAGE?.alternativeText!);
    expect(imgElement).toBeVisible();
    expect(imgElement).toHaveAttribute(
      'src',
      '/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdm1dwtqb3%2Fimage%2Fupload%2Fv1767608230%2Foracle_logo_5dd7b63883.webp&w=256&q=75'
    );
    expect(imgElement).toHaveAttribute('height', `${MOCKED_IMAGE?.height}`);
    expect(imgElement).toHaveAttribute('width', `${MOCKED_IMAGE?.width}`);
  });
});
