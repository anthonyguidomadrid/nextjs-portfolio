import Head from 'next/head';
import { ComponentHeadSeo } from '~/generated/graphql';

export const Seo: React.FC<ComponentHeadSeo> = ({
  pageTitle,
  pageDescription,
  canonicalUrl,
  noFollow,
  noIndex,
  shareImages,
}) => {
  const imageUrl = shareImages?.[0]?.url || '';
  const imageAlt = shareImages?.[0]?.alternativeText || '';

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name='description' content={pageDescription} />
      <meta
        name='robots'
        content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`}
      />

      {/* Canonical URL */}
      {canonicalUrl && <link rel='canonical' href={canonicalUrl} />}

      {/* Open Graph Tags */}
      <meta property='og:title' content={pageTitle} />
      <meta property='og:description' content={pageDescription} />
      <meta property='og:image' content={imageUrl} />
      <meta property='og:image:alt' content={imageAlt} />
      <meta
        property='og:image:width'
        content={
          shareImages?.[0]?.width?.toString() || '1200'
        }
      />
      <meta
        property='og:image:height'
        content={
          shareImages?.[0]?.height?.toString() || '630'
        }
      />
      <meta property='og:type' content='website' />

      {/* Twitter Card Tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={pageTitle} />
      <meta name='twitter:description' content={pageDescription} />
      <meta name='twitter:image' content={imageUrl} />
      <meta name='twitter:image:alt' content={imageAlt} />
    </Head>
  );
};
