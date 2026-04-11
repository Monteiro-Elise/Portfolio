import { FiGlobe } from 'react-icons/fi';
import { useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollVisibility } from './../hooks/useScrollVisibility';

function LanguageSwitcher() {
  const { t, currentLanguage, changeLanguage, languages } = useLanguage();
  const [open, setOpen] = useState(false);
  const isVisible = useScrollVisibility();
  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang);
    setOpen(false);
  };

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          className="flex items-center gap-2 px-3 py-2 sm:py-1 rounded-md sm:text-sm bg-accent text-primary hover"
          aria-label={
            open
              ? t('aria-label.closeLanguageMenu')
              : t('aria-label.openLanguageMenu')
          }
          aria-controls="language-menu"
          aria-expanded={open}
        >
          <FiGlobe className="w-5 h-5 sm:w-4 sm:h-4" aria-hidden="true" />
          <span>
            <b>{t('languages')}</b>
          </span>
        </button>
      </Popover.Trigger>
      <Popover.Content>
        <div
          id="language-menu"
          className={`mt-2 w-32 rounded-md shadow-lg z-50 bg-primary border border-accent
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
        >
          {languages.map((lang) => (
            <button
              aria-label={t('aria-label.setLanguage', {
                language: t(`lang.${lang}`),
              })}
              aria-selected={currentLanguage === lang}
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`w-full text-left px-4 py-2 sm:text-sm transition-colors hover border-b-0 first:rounded-t-md last:rounded-b-md ${
                currentLanguage === lang
                  ? 'bg-accent text-primary'
                  : 'bg-component text-accent'
              }`}
            >
              <b>{t(`lang.${lang}`)}</b>
            </button>
          ))}
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}

export default LanguageSwitcher;
