import { AppContext, AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { initializeApollo } from '~/lib/client';
import {
  GetMenuItemsDocument,
  GetMenuItemsQuery,
  GetHomePageDocument,
  GetHomePageQuery,
  MenuItem,
  PageHome,
  SocialMedia,
} from '~/generated/graphql';
import { Layout } from '~/components/templates';
import { ThemeProvider } from '@emotion/react';
import theme from '~/utils/theme';
import { CssBaseline } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../globals.css';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { Poppins } from 'next/font/google';
import { Provider } from 'react-redux';
import { store } from '~/store';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { StructuredData } from '~/components/atoms';
import {
  buildHref,
  getCanonicalHref,
  stripLocalePrefix,
} from '~/utils/seoUrls';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

interface MyAppProps extends AppProps {
  menuItems: MenuItem[];
  homeData: PageHome;
  socialMedia: SocialMedia;
}

const SITE_ORIGIN = (process.env.NEXT_PUBLIC_SITE_URL || '').replace(/\/$/, '');
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'Portfolio';

function toAbsoluteUrl(origin: string, url?: string | null) {
  if (!url) return undefined;
  if (/^https?:\/\//i.test(url)) return url;
  if (!origin) return undefined;
  return `${origin}${url.startsWith('/') ? '' : '/'}${url}`;
}

// canonical/i18n URL helpers live in ~/utils/seoUrls

const MyApp = ({
  Component,
  pageProps,
  menuItems,
  homeData,
  socialMedia,
}: MyAppProps) => {
  const router = useRouter();
  const locales = router.locales ?? [];
  const defaultLocale = router.defaultLocale ?? 'en';
  const currentLocale = router.locale ?? defaultLocale;

  const pathnameOnly = (router.asPath || '/').split(/[?#]/)[0] || '/';
  const normalizedPath = stripLocalePrefix(pathnameOnly, locales);

  const canonicalHref = getCanonicalHref({
    origin: SITE_ORIGIN,
    asPath: router.asPath,
    locales,
    locale: currentLocale,
    defaultLocale,
  });

  const xDefaultHref = buildHref({
    origin: SITE_ORIGIN,
    locale: defaultLocale,
    defaultLocale,
    normalizedPath,
  });

  const personName = homeData?.Header?.[0]?.title || undefined;
  const personJobTitle = homeData?.Header?.[0]?.subTitle || undefined;
  const sameAs = [socialMedia?.githubUrl, socialMedia?.linkedinUrl].filter(
    Boolean
  ) as string[];

  const siteStructuredData =
    SITE_ORIGIN && personName
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'Person',
            '@id': `${SITE_ORIGIN}/#person`,
            name: personName,
            url: SITE_ORIGIN,
            jobTitle: personJobTitle,
            sameAs: sameAs.length ? sameAs : undefined,
            image: homeData?.SEO?.shareImages?.[0]?.url,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': `${SITE_ORIGIN}/#website`,
            url: SITE_ORIGIN,
            name: SITE_NAME,
            inLanguage: currentLocale,
            publisher: { '@id': `${SITE_ORIGIN}/#person` },
          },
        ]
      : null;

  return (
    <Provider store={store}>
      <GoogleAnalytics trackPageViews />
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, viewport-fit=cover'
        />

        {canonicalHref ? <link rel='canonical' href={canonicalHref} /> : null}

        {xDefaultHref ? (
          <link rel='alternate' hrefLang='x-default' href={xDefaultHref} />
        ) : null}

        {SITE_ORIGIN
          ? locales.map((locale) => {
              const href = buildHref({
                origin: SITE_ORIGIN,
                locale,
                defaultLocale,
                normalizedPath,
              });
              if (!href) return null;
              return (
                <link
                  key={locale}
                  rel='alternate'
                  hrefLang={locale}
                  href={href}
                />
              );
            })
          : null}

        {siteStructuredData ? (
          <StructuredData id='ld-site' data={siteStructuredData} />
        ) : null}
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout
          menuItems={menuItems}
          title={homeData.Header[0]?.title || ''}
          subtitle={homeData.Header[0]?.subTitle || ''}
          socialMedia={socialMedia}
          className={poppins.className}
        >
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const apolloClient = initializeApollo();
  const { locale } = appContext.router;

  const { data: menuItems } = await apolloClient.query<GetMenuItemsQuery>({
    query: GetMenuItemsDocument,
    variables: { locale },
  });

  const { data: homeData } = await apolloClient.query<GetHomePageQuery>({
    query: GetHomePageDocument,
    variables: { locale },
  });

  return {
    menuItems: menuItems?.menuItems,
    homeData: homeData?.pageHome,
    socialMedia: homeData?.socialMedia,
  };
};

export default appWithTranslation(MyApp);
