import LanguageSwitcher from '../components/LanguageSwitcher';
import ToggleDarkMode from '../components/ToggleDarkMode';
import { FiDownload, FiMail } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { CONSTANTS } from '../utils/constants';
import { useLanguage } from '../hooks/useLanguage';

function Header() {
  const { t, currentLanguage } = useLanguage();
  const cvHref = `/cv/CV_Elise_MONTEIRO_${currentLanguage}.pdf`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-component backdrop-blur-sm">
      {/* Actions */}
      <div className="flex items-center justify-end gap-3 px-3">
        {/* Download CV Button */}
        <a
          href={cvHref}
          download={`${CONSTANTS.name} ${t(`resume`)}.pdf`}
          className="icon-btn"
        >
          <FiDownload className="icon-header" />
        </a>

        {/* Github */}
        <a
          href={CONSTANTS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-btn"
        >
          <SiGithub className="icon-header" />
        </a>

        {/* Linkedin */}
        <a href={CONSTANTS.linkedin} className="icon-btn">
          <FaLinkedin className="icon-header" />
        </a>

        {/* Mail */}
        <a href={`mailto:${CONSTANTS.mail}`} className="icon-btn">
          <FiMail className="icon-header" />
        </a>

        <LanguageSwitcher />

        <ToggleDarkMode />
      </div>
    </header>
  );
}

export default Header;
