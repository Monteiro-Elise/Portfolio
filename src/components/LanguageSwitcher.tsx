import { Content, Root, Trigger } from '@radix-ui/react-popover';
import { useState } from 'react';
import { FiGlobe } from 'react-icons/fi';

import { useLanguage } from '../hooks/useLanguage';
import { useScrollDirection } from '../hooks/useScrollDirection';

export default function LanguageSwitcher() {
  const {
    t,
    language,
    changeLanguage,
    supportedLanguages,
    isSupportedLanguage,
  } = useLanguage();
  const [open, setOpen] = useState(false);
  const { scrollDirection } = useScrollDirection();
  const handleLanguageChange = (lang: string) => {
    if (!isSupportedLanguage(lang)) return;
    changeLanguage(lang);
    setOpen(false);
  };

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger asChild>
        <button
          className="flex items-center gap-2 px-3 py-2 sm:py-1 rounded-md sm:text-sm bg-accent text-primary hoverable"
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
      </Trigger>
      <Content>
        <div
          id="language-menu"
          className={`mt-2 w-32 rounded-md shadow-lg z-50 bg-primary border border-accent duration-300 ${scrollDirection === 'up' ? 'translate-y-0' : '-translate-y-full'}`}
        >
          {supportedLanguages.map((lang, index) => (
            <button
              aria-label={t('aria-label.setLanguage', {
                language: t(`lang.${lang}`),
              })}
              aria-pressed={language === lang}
              key={index}
              onClick={() => handleLanguageChange(lang)}
              className={`w-full text-left px-4 py-2 sm:text-sm hover border-b-0 first:rounded-t-md last:rounded-b-md ${
                language === lang
                  ? 'bg-accent text-primary'
                  : 'bg-component text-accent'
              }`}
            >
              <b>{t(`lang.${lang}`)}</b>
            </button>
          ))}
        </div>
      </Content>
    </Root>
  );
}
