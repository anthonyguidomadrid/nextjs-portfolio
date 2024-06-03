import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import NextI18nextConfig from "../next-i18next.config.js";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp, NextI18nextConfig);
