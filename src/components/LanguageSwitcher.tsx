import { FiGlobe } from 'react-icons/fi';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';

function LanguageSwitcher() {
  const { t, currentLanguage, changeLanguage, languages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1 rounded-md text-sm bg-accent text-primary hover"
      >
        <FiGlobe className="w-4 h-4" />
        <span>{t('languages')}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg z-50 bg-primary border border-accent overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`w-full text-left px-4 py-2 text-sm transition-colors hover ${
                currentLanguage === lang
                  ? 'bg-accent text-primary'
                  : 'bg-component text-accent'
              }`}
            >
              {t(`lang.${lang}`)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
