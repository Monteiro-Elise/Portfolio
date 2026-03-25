import LanguageSwitcher from '../components/LanguageSwitcher';
import ToggleDarkMode from '../components/ToggleDarkMode';
import { FiDownload, FiMail } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { CONSTANTS } from '../utils/constants';
import { useTranslation } from 'react-i18next';

function Header() {
  const { i18n, t } = useTranslation();
  const cvHref = `/cv/CV_Elise_MONTEIRO_${i18n.language}.pdf`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-component backdrop-blur-sm">
      {/* Actions */}
      <div className="flex items-center justify-end gap-3">
        {/* Download CV Button */}
        <a
          href={cvHref}
          download={`${CONSTANTS.name} ${t(`resume`)}.pdf`}
          className="p-2 rounded-md hover:opacity-70 transition-opacity text-accent"
        >
          <FiDownload className="w-5 h-5" />
        </a>

        {/* Github */}
        <a
          href={CONSTANTS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-md hover:opacity-70 transition-opacity text-accent"
        >
          <SiGithub className="w-5 h-5" />
        </a>

        {/* Linkedin */}
        <a
          href={CONSTANTS.linkedin}
          className="p-2 rounded-md hover:opacity-70 transition-opacity text-accent"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>

        {/* Mail */}
        <a
          href={CONSTANTS.mail}
          className="p-2 rounded-md hover:opacity-70 transition-opacity text-accent"
        >
          <FiMail className="w-5 h-5" />
        </a>

        <LanguageSwitcher />

        <ToggleDarkMode />
      </div>
    </header>
  );
}

export default Header;
