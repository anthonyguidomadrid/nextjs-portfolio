import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import COMMON_EN_TRANSLATIONS from '../../public/locales/en/common.json'
import COMMON_ES_TRANSLATIONS from '../../public/locales/es/common.json'

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  debug: false,
  resources: {
    en: {
        common: COMMON_EN_TRANSLATIONS,
    },
    es: {
        common: COMMON_ES_TRANSLATIONS
    },
  },
});

export default i18n;
