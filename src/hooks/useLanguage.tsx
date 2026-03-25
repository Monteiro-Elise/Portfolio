import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { CONSTANTS } from '../utils/constants';

export function useLanguage() {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language;

  const changeLanguage = useCallback(
    (lang: string) => {
      i18n.changeLanguage(lang);
    },
    [i18n]
  );

  return {
    t,
    currentLanguage,
    languages: CONSTANTS.languages,
    changeLanguage,
  };
}
