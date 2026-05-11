import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { CONSTANTS } from '../utils/constants';

type Language = (typeof CONSTANTS.languages)[number];

export function useLanguage() {
  const { i18n, t } = useTranslation();
  const isLanguage = (value: string): value is Language =>
    (CONSTANTS.languages as readonly string[]).includes(value);

  const changeLanguage = useCallback(
    (lang: Language) => {
      if (lang === i18n.language || !isLanguage(lang)) return;
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
        e.key !== CONSTANTS.languageStorageKey ||
        !e.newValue ||
        !isLanguage(e.newValue)
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
    currentLanguage: i18n.language,
    languages: CONSTANTS.languages,
    changeLanguage,
    isLanguage,
  };
}
