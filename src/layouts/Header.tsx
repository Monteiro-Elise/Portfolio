import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function Header() {
  const { i18n } = useTranslation();
  const cvHref = `/cv/CV_Elise_MONTEIRO_${i18n.language}.pdf`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-component backdrop-blur-sm">
      {/* Actions */}
      <div className="flex items-center justify-end gap-3">
        {/* Download CV Button */}
        <a
          href={cvHref}
          download="Elise_Monteiro_CV.pdf"
          className="p-2 rounded-md hover:opacity-70 transition-opacity text-accent"
        >
          <Download className="w-5 h-5" />
        </a>
      </div>
    </header>
  );
}

export default Header;
