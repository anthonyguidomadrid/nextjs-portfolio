import { screen } from '@testing-library/react';
import { PageTitle } from './PageTitle';
import { render } from '~/utils/test-utils';

jest.mock('@strapi/blocks-react-renderer', () => ({
  BlocksRenderer: ({ content }: { content: any }) => (
    <div data-testid='RichText'>
      {Array.isArray(content)
        ? content
            .flatMap((block: any) => block?.children ?? [])
            .map((child: any) => child?.text ?? '')
            .join('')
        : ''}
    </div>
  ),
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

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders title and subtitle correctly', () => {
    render(<PageTitle title='Main Title' subTitle='Sub Title' isMainTitle />);

    expect(screen.getByTestId('StyledTitle')).toHaveTextContent('Main Title');
    expect(screen.getByText('Sub Title')).toBeInTheDocument();
  });

  it('renders description and picture when provided', () => {
    const descriptionText = 'This is a description.';
    const description = [
      {
        type: 'paragraph',
        children: [{ type: 'text', text: descriptionText }],
      },
    ];
    const picture = {
      id: '1',
      url: '/test-image.jpg',
      alternativeText: 'Test Image',
      height: 200,
      width: 300,
      hash: 'testhash',
      mime: 'image/jpeg',
      name: 'test-image.jpg',
      provider: 'local',
      size: 100,
      createdAt: '2023-01-01T00:00:00.000Z',
      updatedAt: '2023-01-01T00:00:00.000Z',
      previewUrl: null,
      formats: null,
      caption: null,
      ext: '.jpg',
      folderPath: null,
      folder: null,
      related: [],
      documentId: 'doc1',
    };

    render(
      <PageTitle
        title='Test Title'
        description={description}
        picture={picture}
      />
    );

    expect(screen.getByTestId('RichText')).toHaveTextContent(descriptionText);
    expect(screen.getByTestId('StyledImage')).toHaveAttribute(
      'src',
      '/test-image.jpg'
    );
    expect(screen.getByTestId('StyledImage')).toHaveAttribute(
      'alt',
      'Test Image'
    );
  });

  it('renders children correctly', () => {
    render(
      <PageTitle title='Title'>
        <div data-testid='child'>Child Content</div>
      </PageTitle>
    );

    expect(screen.getByTestId('child')).toHaveTextContent('Child Content');
  });

  it('does not render description or picture when not provided', () => {
    render(<PageTitle title='Title' />);

    expect(screen.queryByTestId('RichText')).toBeNull();
    expect(screen.queryByTestId('StyledImage')).toBeNull();
  });
});
