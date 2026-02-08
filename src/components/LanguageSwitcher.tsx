import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <button onClick={() => i18n.changeLanguage('fr')}>{t('french')}</button>
      <button onClick={() => i18n.changeLanguage('en')}>{t('english')}</button>
    </div>
  );
}

export default LanguageSwitcher;
