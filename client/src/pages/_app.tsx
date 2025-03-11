import { AppContext, AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { initializeApollo } from '~/lib/client';
import {
  GetMenuItemsDocument,
  GetMenuItemsQuery,
  GetHomePageDocument,
  GetHomePageQuery,
  MenuItemEntity,
  HomeEntity,
  SocialMediaEntity,
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
    <Provider store={store}>
      <GoogleAnalytics trackPageViews />
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
    ...menuItems,
    ...homeData,
  };
};

export default appWithTranslation(MyApp);
