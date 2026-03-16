import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="py-8 border-t bg-primary border-accent text-accent">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">© 2026 Elise Monteiro. {t('copy-right')}.</p>
      </div>
    </footer>
  );
}

export default Footer;
