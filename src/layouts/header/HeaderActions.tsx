import LanguageSwitcher from '../../components/LanguageSwitcher';
import ToggleDarkMode from '../../components/ToggleDarkMode';
import { FiDownload, FiMail } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { CONSTANTS } from '../../utils/constants';
import { useLanguage } from '../../hooks/useLanguage';

function HeaderActions() {
  const { t, currentLanguage } = useLanguage();
  const cvHref = `/cv/CV_Elise_MONTEIRO_${currentLanguage}.pdf`;

  return (
    <>
      {/* Download CV Button */}
      <a
        href={cvHref}
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

      <ToggleDarkMode />

      <LanguageSwitcher />
    </>
  );
}

export default HeaderActions;
