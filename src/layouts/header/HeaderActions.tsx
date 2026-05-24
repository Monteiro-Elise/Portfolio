import { memo } from 'react';
import { FaLinkedin } from 'react-icons/fa6';
import { FiDownload, FiMail } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';

import DarkModeToggle from '../../components/DarkModeToggle';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { appConfig } from '../../config/app.config';
import { useLanguage } from '../../hooks/useLanguage';

function HeaderActions() {
  const { t, language } = useLanguage();
  const resumeHref = `/resume/resume-elise-monteiro-${language}.pdf`;

  return (
    <>
      {/* Download Resume Button */}
      <a
        href={resumeHref}
        download={`${appConfig.name} ${t(`resume`)}.pdf`}
        className="icon-btn show-pc"
        aria-label={t('aria-label.resume')}
      >
        <FiDownload className="icon-header" aria-hidden="true" />
      </a>

      {/* Github */}
      <a
        aria-label={t('aria-label.github')}
        href={appConfig.contact.github}
        target="_blank"
        rel="noopener noreferrer"
        className="icon-btn show-pc"
      >
        <SiGithub className="icon-header" aria-hidden="true" />
      </a>

      {/* Linkedin */}
      <a
        href={appConfig.contact.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('aria-label.linkedin')}
        className="icon-btn show-pc"
      >
        <FaLinkedin className="icon-header" aria-hidden="true" />
      </a>

      {/* Mail */}
      <a
        href={`mailto:${appConfig.contact.email}`}
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

export default memo(HeaderActions);
