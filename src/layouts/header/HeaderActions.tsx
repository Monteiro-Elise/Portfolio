import { FaLinkedin } from 'react-icons/fa6';
import { FiDownload, FiMail } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';

import DarkModeToggle from '../../components/DarkModeToggle';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { useLanguage } from '../../hooks/useLanguage';
import { CONSTANTS } from '../../utils/constants';

export default function HeaderActions() {
  const { t, currentLanguage } = useLanguage();
  const resumeHref = `/resume/Resume-Elise-MONTEIRO-${currentLanguage}.pdf`;

  return (
    <>
      {/* Download Resume Button */}
      <a
        href={resumeHref}
        download={`${CONSTANTS.name} ${t(`resume`)}.pdf`}
        className="icon-btn show-pc"
        aria-label={t('aria-label.resume')}
      >
        <FiDownload className="icon-header" aria-hidden="true" />
      </a>

      {/* Github */}
      <a
        aria-label={t('aria-label.github')}
        href={CONSTANTS.github}
        target="_blank"
        rel="noopener noreferrer"
        className="icon-btn show-pc"
      >
        <SiGithub className="icon-header" aria-hidden="true" />
      </a>

      {/* Linkedin */}
      <a
        href={CONSTANTS.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('aria-label.linkedin')}
        className="icon-btn show-pc"
      >
        <FaLinkedin className="icon-header" aria-hidden="true" />
      </a>

      {/* Mail */}
      <a
        href={`mailto:${CONSTANTS.mail}`}
        aria-label={t('aria-label.email')}
        className="icon-btn show-pc"
      >
        <FiMail className="icon-header" aria-hidden="true" />
      </a>

      <DarkModeToggle />

      <LanguageSwitcher />
    </>
  );
}
