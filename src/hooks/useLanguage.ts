import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { appConfig } from '../config/app.config';

type Language = (typeof appConfig.i18n.supportedLanguages)[number];

export function useLanguage() {
  const { i18n, t } = useTranslation();
  const isSupportedLanguage = (value: string): value is Language =>
    (appConfig.i18n.supportedLanguages as readonly string[]).includes(value);

  const changeLanguage = useCallback(
    (lang: Language) => {
      if (lang === i18n.language || !isSupportedLanguage(lang)) return;
      i18n.changeLanguage(lang);
    },
    [i18n]
  );

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // Sync language changes across tabs.
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (
        e.key !== appConfig.i18n.languageStorageKey ||
        !e.newValue ||
        !isSupportedLanguage(e.newValue)
      ) {
        return;
      }
      changeLanguage(e.newValue);
    };

    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [changeLanguage]);

  return {
    t,
    language: i18n.language,
    supportedLanguages: appConfig.i18n.supportedLanguages,
    changeLanguage,
    isSupportedLanguage,
  };
}
