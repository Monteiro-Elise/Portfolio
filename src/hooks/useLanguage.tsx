import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { CONSTANTS } from '../utils/constants';

export function useLanguage() {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language;
  const STORAGE_KEY = 'language';

  const changeLanguage = useCallback(
    (lang: string) => {
      if (lang === i18n.language) return;
      i18n.changeLanguage(lang);
      localStorage.setItem(STORAGE_KEY, lang);
    },
    [i18n]
  );

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    const savedLang = localStorage.getItem(STORAGE_KEY);

    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  return {
    t,
    currentLanguage,
    languages: CONSTANTS.languages,
    changeLanguage,
  };
}
