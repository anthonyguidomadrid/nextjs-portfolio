import { screen, fireEvent } from '@testing-library/react';
import { PortfolioCard } from './PortfolioCard';
import { formatDate } from '~/utils/formatDates';
import { render } from '~/utils/test-utils';
import { PorfolioCardProps } from './PortfolioCard.types';

describe('PortfolioCard ', () => {
  const DEFAULT_PROPS: PorfolioCardProps = {
    title: 'Sample Title',
    subTitle: 'Sample SubTitle',
    slug: 'sample-slug',
    date: '2023-12-25',
    thumbnail: {
      url: '/images/sample.jpg',
      alternativeText: 'Sample Alt Text',
      hash: '',
      mime: '',
      name: '',
      provider: '',
      size: 0,
      documentId: '',
    },
    codeUrl: '',
    description: '',
    id: '',
    pictures: [],
    categories: [],
    pictures_connection: {
      nodes: [],
    },
  };

  const MOCKED_IMAGE = DEFAULT_PROPS.thumbnail;

  it('renders the title, date, and thumbnail image correctly', () => {
    render(<PortfolioCard {...DEFAULT_PROPS} />);

    expect(screen.getByText(DEFAULT_PROPS.title)).toBeVisible();
    expect(screen.getByText(formatDate(DEFAULT_PROPS.date))).toBeVisible();
    expect(screen.getByAltText(MOCKED_IMAGE?.alternativeText!)).toHaveAttribute(
      'src',
      `${MOCKED_IMAGE?.url}`
    );
  });

  it('renders subtitle only on hover', () => {
    render(<PortfolioCard {...DEFAULT_PROPS} />);

    expect(screen.queryByText(DEFAULT_PROPS.subTitle)).not.toBeInTheDocument();

    fireEvent.mouseEnter(screen.getByRole('button'));
    expect(screen.getByText(DEFAULT_PROPS.subTitle)).toBeVisible();

    fireEvent.mouseLeave(screen.getByRole('button'));
    expect(screen.queryByText(DEFAULT_PROPS.subTitle)).not.toBeInTheDocument();
  });

  it('uses the title as the alt text if no alt text is provided', () => {
    render(
      <PortfolioCard
        {...DEFAULT_PROPS}
        thumbnail={{
          url: '/images/sample.jpg',
          alternativeText: '',
          hash: '',
          mime: '',
          name: '',
          provider: '',
          size: 0,
          documentId: '',
        }}
      />
    );

    expect(screen.getByAltText(DEFAULT_PROPS.title)).toBeVisible();
  });
});
