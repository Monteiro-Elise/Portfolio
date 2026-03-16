import { FiGlobe } from 'react-icons/fi';
import { useState } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { CONSTANTS } from '../utils/constants';

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const buttons: React.ReactElement[] = [];
  for (const lang of CONSTANTS.languages) {
    buttons.push(
      <button
        key={lang}
        onClick={() => i18n.changeLanguage(lang)}
        className={`w-full text-left px-4 py-2 text-sm
        ${
          language === lang
            ? 'bg-accent text-primary'
            : 'bg-component text-accent'
        } transition-colors`}
      >
        {t(`lang.${lang}`)}
      </button>
    );
  }
  return (
    <div className="relative">
      <button
        onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
        className="flex items-center gap-2 px-3 py-1 rounded-md text-sm bg-accent text-primary"
      >
        <FiGlobe className="w-4 h-4" />
        <span>{t('languages')}</span>
      </button>
      {languageMenuOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg z-50 bg-primary border border-accent overflow-hidden">
          {buttons}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
