import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';
import { store } from '~/store';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default appWithTranslation(MyApp);
