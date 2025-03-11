import { ComponentHeadSeo } from '~/generated/graphql';
import { render } from '~/utils/test-utils';
import { Seo } from './Seo';

jest.mock('next/head', () => ({
  __esModule: true,
  default: ({ children }: any) => <>{children}</>,
}));

describe('Seo', () => {
  const SEO_MOCK: ComponentHeadSeo = {
    pageTitle: 'Senior Frontend Engineer | React & Next.js Expert',
    pageDescription:
      'Experienced Senior Frontend Engineer with 10+ years in web development, specializing in React, Next.js. Crafting seamless, high-performance web solutions.',
    canonicalUrl: 'https://example.com',
    noFollow: false,
    noIndex: false,
    shareImages: {
      data: [
        {
          attributes: {
            alternativeText: 'Anthony Guido Senior Software Engineer',
            url: 'https://res.cloudinary.com/dehtxdkyc/image/upload/v1741084057/anthony_guido_senior_software_engineer_c599ca0a60.jpg',
            height: 630,
            width: 1200,
            hash: '',
            mime: '',
            name: '',
            provider: '',
            size: 0,
          },
        },
      ],
    },
    id: '',
  };

  it('renders basic SEO meta tags correctly', () => {
    const { container } = render(<Seo {...SEO_MOCK} />);

    const titleTag = container.querySelector('title');
    expect(titleTag).toHaveTextContent(SEO_MOCK.pageTitle);

    const metaDescription = container.querySelector('meta[name="description"]');
    expect(metaDescription).toHaveAttribute('content', SEO_MOCK.pageDescription);

    const metaRobots = container.querySelector('meta[name="robots"]');
    expect(metaRobots).toHaveAttribute('content', 'index, follow');
  });

  it('renders canonical URL if provided', () => {
    const { container } = render(<Seo {...SEO_MOCK} />);

    const linkCanonical = container.querySelector('link[rel="canonical"]');
    expect(linkCanonical).toHaveAttribute('href', SEO_MOCK.canonicalUrl);
  });

  it('does not render canonical URL if not provided', () => {
    const SEO_MOCKWithoutCanonical = { ...SEO_MOCK, canonicalUrl: null };
    const { container } = render(<Seo {...SEO_MOCKWithoutCanonical} />);

    const linkCanonical = container.querySelector('link[rel="canonical"]');
    expect(linkCanonical).toBeNull();
  });

  it('renders Open Graph meta tags correctly', () => {
    const { container } = render(<Seo {...SEO_MOCK} />);

    const ogTitle = container.querySelector('meta[property="og:title"]');
    expect(ogTitle).toHaveAttribute('content', SEO_MOCK.pageTitle);

    const ogDescription = container.querySelector(
      'meta[property="og:description"]'
    );
    expect(ogDescription).toHaveAttribute('content', SEO_MOCK.pageDescription);

    const ogImage = container.querySelector('meta[property="og:image"]');
    expect(ogImage).toHaveAttribute(
      'content',
      SEO_MOCK.shareImages?.data[0].attributes?.url
    );
  });

  it('renders Twitter Card meta tags correctly', () => {
    const { container } = render(<Seo {...SEO_MOCK} />);

    const twitterCard = container.querySelector('meta[name="twitter:card"]');
    expect(twitterCard).toHaveAttribute('content', 'summary_large_image');

    const twitterTitle = container.querySelector('meta[name="twitter:title"]');
    expect(twitterTitle).toHaveAttribute('content', SEO_MOCK.pageTitle);

    const twitterDescription = container.querySelector(
      'meta[name="twitter:description"]'
    );
    expect(twitterDescription).toHaveAttribute(
      'content',
      SEO_MOCK.pageDescription
    );

    const twitterImage = container.querySelector('meta[name="twitter:image"]');
    expect(twitterImage).toHaveAttribute(
      'content',
      SEO_MOCK.shareImages?.data[0].attributes?.url
    );
  });

  it('renders correct image dimensions for Open Graph and Twitter', () => {
    const { container } = render(<Seo {...SEO_MOCK} />);

    const ogImageWidth = container.querySelector(
      'meta[property="og:image:width"]'
    );
    expect(ogImageWidth).toHaveAttribute('content', '1200');

    const ogImageHeight = container.querySelector(
      'meta[property="og:image:height"]'
    );
    expect(ogImageHeight).toHaveAttribute('content', '630');
  });

  it('renders fallback dimensions if image data is missing', () => {
    const SEO_MOCKWithMissingImage = {
      ...SEO_MOCK,
      shareImages: {
        data: [],
      },
    };

    const { container } = render(<Seo {...SEO_MOCKWithMissingImage} />);

    const ogImageWidth = container.querySelector(
      'meta[property="og:image:width"]'
    );
    expect(ogImageWidth).toHaveAttribute('content', '1200');

    const ogImageHeight = container.querySelector(
      'meta[property="og:image:height"]'
    );
    expect(ogImageHeight).toHaveAttribute('content', '630');
  });
});
