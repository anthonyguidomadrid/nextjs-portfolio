import { useRouter } from 'next/router';
import { LocaleButton, ButtonWrapper } from './LanguageSwitcher.styles';

export const LanguageSwitcher = () => {
  const router = useRouter();
  const { locales, locale: currentLocale } = router;

  const changeLanguage = (newLocale: string) => {
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <ButtonWrapper>
      {locales
        ?.filter((locale) => locale !== currentLocale)
        .map((locale) => (
          <LocaleButton key={locale} onClick={() => changeLanguage(locale)}>
            {locale.toUpperCase()}
          </LocaleButton>
        ))}
    </ButtonWrapper>
  );
};
