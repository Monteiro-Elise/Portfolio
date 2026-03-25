import { CONSTANTS } from '../utils/constants';
import { useLanguage } from '../hooks/useLanguage';

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="py-8 border-t bg-primary border-accent text-accent">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © 2026 {CONSTANTS.name}. {t('copy-right')}.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
