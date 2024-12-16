import { format, Locale } from 'date-fns';
import { enUS, fr, es } from 'date-fns/locale';
import { TFunction } from 'i18next';

const locales: Record<string, Locale> = { en: enUS, fr, es };

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const formatDate = (date: string, locale = 'en') =>
  capitalize(
    format(new Date(date), 'MMMM yyyy', {
      locale: locales[locale] || enUS,
    })
  );

export const formatDateRange = (
  startDate: string,
  t: TFunction<'translation', undefined>,
  locale = 'en',
  endDate?: string
) => {
  const start = formatDate(startDate, locale);
  const end = endDate ? formatDate(endDate, locale) : t('date.current');

  return `${start} - ${end}`;
};
