export function stripLocalePrefix(
  pathname: string,
  locales: readonly string[]
) {
  for (const locale of locales) {
    if (pathname === `/${locale}`) return '/';
    const prefix = `/${locale}/`;
    if (pathname.startsWith(prefix)) return `/${pathname.slice(prefix.length)}`;
  }
  return pathname;
}

export function buildHref(params: {
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

export function getCanonicalHref(params: {
  origin: string;
  asPath?: string;
  locales: readonly string[];
  locale: string;
  defaultLocale: string;
}) {
  const { origin, asPath, locales, locale, defaultLocale } = params;
  if (!origin) return undefined;

  const pathnameOnly = (asPath || '/').split(/[?#]/)[0] || '/';
  const normalizedPath = stripLocalePrefix(pathnameOnly, locales);

  return buildHref({
    origin,
    locale,
    defaultLocale,
    normalizedPath,
  });
}
