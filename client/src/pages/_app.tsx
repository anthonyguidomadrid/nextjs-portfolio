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

const MyApp = ({
  Component,
  pageProps,
  menuItems,
  homeData,
  socialMedia,
}: MyAppProps) => (
  <Provider store={store}>
    <GoogleAnalytics trackPageViews />
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
    menuItems: menuItems.menuItems,
    homeData: homeData.pageHome,
    socialMedia: homeData.socialMedia,
  };
};

export default appWithTranslation(MyApp);
