import App, { AppContext, AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';
import { store } from '~/store';
import { Layout } from '~/components';
import { initializeApollo } from '~/lib/client';
import {
  GetMenuItemsDocument,
  GetMenuItemsQuery,
  MenuItemEntity,
} from '~/generated/graphql';
import { ThemeProvider } from '@mui/material';
import theme from '~/utils/theme';

interface MyAppProps extends AppProps {
  menuItems: { data: MenuItemEntity[] };
}

const MyApp = ({ Component, pageProps, menuItems }: MyAppProps) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Layout menuItems={menuItems.data}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </Provider>
);

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const apolloClient = initializeApollo();
  const { locale } = appContext.router;

  const { data } = await apolloClient.query<GetMenuItemsQuery>({
    query: GetMenuItemsDocument,
    variables: { locale },
  });

  return {
    ...appProps,
    ...data,
  };
};

export default appWithTranslation(MyApp);
