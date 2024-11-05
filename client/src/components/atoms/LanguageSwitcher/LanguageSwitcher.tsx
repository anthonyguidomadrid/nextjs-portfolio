import { useRouter } from 'next/router';

export const LanguageSwitcher = () => {
  const router = useRouter();
  const { locales, locale: currentLocale } = router;

  const changeLanguage = (newLocale: string) => {
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <div>
      {locales?.map((locale) => (
        <button
          key={locale}
          onClick={() => changeLanguage(locale)}
          className={locale === currentLocale ? 'active' : ''}
          style={{ margin: '0 5px', padding: '5px 10px', cursor: 'pointer' }}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
