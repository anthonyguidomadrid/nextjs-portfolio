import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import COMMON_EN_TRANSLATIONS from '../../public/locales/en/common.json';
import COMMON_ES_TRANSLATIONS from '../../public/locales/es/common.json';
import COMMON_FR_TRANSLATIONS from '../../public/locales/fr/common.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  defaultNS: 'common',
  debug: false,
  resources: {
    en: {
      common: COMMON_EN_TRANSLATIONS,
    },
    es: {
      common: COMMON_ES_TRANSLATIONS,
    },
    fr: {
      common: COMMON_FR_TRANSLATIONS,
    },
  },
});

export default i18n;
