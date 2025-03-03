import { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

export default function Document({ locale }: { locale: string }) {
  return (
    <Html lang={locale}>
      <Head />
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
