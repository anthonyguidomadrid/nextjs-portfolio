import Head from 'next/head';
import { ComponentHeadSeo } from '~/generated/graphql';
import { StructuredData } from '~/components/atoms/StructuredData';
import { useRouter } from 'next/router';
import { getCanonicalHref } from '~/utils/seoUrls';

const SITE_ORIGIN = (process.env.NEXT_PUBLIC_SITE_URL || '').replace(/\/$/, '');

export const Seo: React.FC<ComponentHeadSeo> = ({
  pageTitle,
  pageDescription,
  canonicalUrl,
  noFollow,
  noIndex,
  shareImages,
}) => {
  const router = useRouter();
  const image = shareImages?.[0];
  const imageUrl = image?.url || '';
  const imageAlt = image?.alternativeText || '';
  const imageWidth = image?.width?.toString() || '1200';
  const imageHeight = image?.height?.toString() || '630';

  const locales = router.locales ?? [];
  const defaultLocale = router.defaultLocale ?? 'en';
  const currentLocale = router.locale ?? defaultLocale;

  const routerCanonicalHref = getCanonicalHref({
    origin: SITE_ORIGIN,
    asPath: router.asPath,
    locales,
    locale: currentLocale,
    defaultLocale,
  });

  const canonicalHref = routerCanonicalHref || canonicalUrl || undefined;

  const webPageStructuredData = canonicalHref
    ? {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${canonicalHref}#webpage`,
        url: canonicalHref,
        name: pageTitle,
        description: pageDescription,
        isPartOf: SITE_ORIGIN
          ? { '@id': `${SITE_ORIGIN}/#website` }
          : undefined,
        about: SITE_ORIGIN ? { '@id': `${SITE_ORIGIN}/#person` } : undefined,
        primaryImageOfPage: imageUrl
          ? {
              '@type': 'ImageObject',
              url: imageUrl,
              width: Number(imageWidth),
              height: Number(imageHeight),
              caption: imageAlt || undefined,
            }
          : undefined,
      }
    : null;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name='description' content={pageDescription} />
      <meta
        name='robots'
        content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`}
      />

      {/* Open Graph Tags */}
      <meta property='og:title' content={pageTitle} />
      <meta property='og:description' content={pageDescription} />
      <meta property='og:image' content={imageUrl} />
      <meta property='og:image:alt' content={imageAlt} />
      {canonicalHref ? (
        <meta property='og:url' content={canonicalHref} />
      ) : null}
      <meta property='og:image:width' content={imageWidth} />
      <meta property='og:image:height' content={imageHeight} />
      <meta property='og:type' content='website' />

      {/* Twitter Card Tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={pageTitle} />
      <meta name='twitter:description' content={pageDescription} />
      <meta name='twitter:image' content={imageUrl} />
      <meta name='twitter:image:alt' content={imageAlt} />

      {webPageStructuredData ? (
        <StructuredData id='ld-webpage' data={webPageStructuredData} />
      ) : null}
    </Head>
  );
};
