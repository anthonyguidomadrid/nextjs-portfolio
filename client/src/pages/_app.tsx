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

function stripLocalePrefix(pathname: string, locales: readonly string[]) {
  for (const locale of locales) {
    if (pathname === `/${locale}`) return '/';
    const prefix = `/${locale}/`;
    if (pathname.startsWith(prefix)) return `/${pathname.slice(prefix.length)}`;
  }
  return pathname;
}

function buildHref(params: {
  origin: string;
  locale: string;
  defaultLocale: string;
  normalizedPath: string;
}) {
  const { origin, locale, defaultLocale, normalizedPath } = params;
  if (!origin) return undefined;

  if (locale === defaultLocale) {
    return `${origin}${normalizedPath}`;
  }

  return `${origin}/${locale}${normalizedPath === '/' ? '' : normalizedPath}`;
}

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

  const canonicalHref = buildHref({
    origin: SITE_ORIGIN,
    locale: currentLocale,
    defaultLocale,
    normalizedPath,
  });

  const xDefaultHref = buildHref({
    origin: SITE_ORIGIN,
    locale: defaultLocale,
    defaultLocale,
    normalizedPath,
  });

  return (
    <Provider store={store}>
      <GoogleAnalytics trackPageViews />
      <Head>
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
