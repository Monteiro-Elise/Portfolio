import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { CONSTANTS } from './utils/constants';

i18n
  .use(LanguageDetector)
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: CONSTANTS.languages,
    nonExplicitSupportedLngs: false,
    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: '/locales/{{lng}}.json',
    },

    // Use localStorage to keep a consistent language source during initialization and runtime
    // localStorage detects language updates between tabs, unlike the HTML lang attribute
    detection: {
      order: ['localStorage', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: CONSTANTS.languageStorageKey,
    },
  });

export default i18n;
