import { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

export default function Document({ locale }: { locale: string }) {
  return (
    <Html lang={locale}>
      <Head>
        {/* Standard Favicons */}
        <link rel='icon' href='/favicons/favicon.ico' />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicons/favicon-16x16.png'
        />

        {/* Apple Touch Icon */}
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicons/apple-touch-icon.png'
        />

        {/* Android Chrome Icons for PWA */}
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/favicons/android-chrome-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='512x512'
          href='/favicons/android-chrome-512x512.png'
        />

        {/* Web App Manifest */}
        <link rel='manifest' href='/favicons/site.webmanifest' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await ctx.defaultGetInitialProps(ctx);
  return { ...initialProps, locale: ctx.locale || 'en' };
};
