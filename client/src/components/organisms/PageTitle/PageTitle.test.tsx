import { screen } from '@testing-library/react';
import { PageTitle } from './PageTitle';
import { render } from '~/utils/test-utils';

jest.mock('../../atoms/RichText', () => ({
  RichText: jest.fn(({ content }) => (
    <div data-testid='RichText'>{content}</div>
  )),
}));

jest.mock('./PageTitle.styles', () => ({
  StyledImage: jest.fn(({ src, alt }) => (
    <img data-testid='StyledImage' src={src} alt={alt} />
  )),
  StyledTitle: jest.fn(({ children }) => (
    <h1 data-testid='StyledTitle'>{children}</h1>
  )),
  StyledWrapper: jest.fn(({ children }) => (
    <div data-testid='StyledWrapper'>{children}</div>
  )),
}));

describe('PageTitle Component', () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders title and subtitle correctly', () => {
    render(<PageTitle Title='Main Title' subTitle='Sub Title' isMainTitle />);

    expect(screen.getByTestId('StyledTitle')).toHaveTextContent('Main Title');
    expect(screen.getByText('Sub Title')).toBeInTheDocument();
  });

  it('renders description and picture when provided', () => {
    const description = 'This is a description.';
    const picture = {
      data: {
        attributes: {
          url: '/test-image.jpg',
          alternativeText: 'Test Image',
          height: 200,
          width: 300,
          hash: '',
          mime: '',
          name: '',
          provider: '',
          size: 100,
        },
      },
    };

    render(
      <PageTitle
        Title='Test Title'
        description={description}
        picture={picture}
      />
    );

    expect(screen.getByTestId('RichText')).toHaveTextContent(description);
    expect(screen.getByTestId('StyledImage')).toHaveAttribute(
      'src',
      `${baseUrl}/test-image.jpg`
    );
    expect(screen.getByTestId('StyledImage')).toHaveAttribute(
      'alt',
      'Test Image'
    );
  });

  it('renders children correctly', () => {
    render(
      <PageTitle Title='Title'>
        <div data-testid='child'>Child Content</div>
      </PageTitle>
    );

    expect(screen.getByTestId('child')).toHaveTextContent('Child Content');
  });

  it('does not render description or picture when not provided', () => {
    render(<PageTitle Title='Title' />);

    expect(screen.queryByTestId('RichText')).toBeNull();
    expect(screen.queryByTestId('StyledImage')).toBeNull();
  });
});
