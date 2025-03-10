import App, { AppContext, AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';
import { store } from '~/store';
import { Layout } from '~/components/templates';
import { initializeApollo } from '~/lib/client';
import {
  GetHomePageDocument,
  GetHomePageQuery,
  GetMenuItemsDocument,
  GetMenuItemsQuery,
  HomeEntity,
  MenuItemEntity,
  SocialMediaEntity,
} from '~/generated/graphql';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '~/utils/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../globals.css';
import { Poppins } from 'next/font/google';
import { GoogleAnalytics } from 'nextjs-google-analytics';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

interface MyAppProps extends AppProps {
  menuItems: { data: MenuItemEntity[] };
  home: { data: HomeEntity };
  socialMedia: { data: SocialMediaEntity };
}

const MyApp = ({
  Component,
  pageProps,
  menuItems: { data: menuItemsData },
  home: {
    data: { attributes: homeAttributes },
  },
  socialMedia: {
    data: { attributes: socialMediaAttributes },
  },
}: MyAppProps) => {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout
            menuItems={menuItemsData}
            title={homeAttributes?.Header.Title}
            subtitle={homeAttributes?.Header.subTitle}
            socialMedia={socialMediaAttributes}
            className={poppins.className}
          >
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
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
    ...appProps,
    ...menuItems,
    ...homeData,
  };
};

export default appWithTranslation(MyApp);
