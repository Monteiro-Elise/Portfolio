import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { CONSTANTS } from '../utils/constants';

export function useLanguage() {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language;

  const changeLanguage = useCallback(
    (lang: string) => {
      if (lang === i18n.language) return;
      i18n.changeLanguage(lang);
    },
    [i18n]
  );

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return {
    t,
    currentLanguage,
    languages: CONSTANTS.languages,
    changeLanguage,
  };
}
