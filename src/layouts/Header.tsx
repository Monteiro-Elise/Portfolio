import LanguageSwitcher from '../components/LanguageSwitcher';
import ToggleDarkMode from '../components/ToggleDarkMode';
import NavItems from '../components/NavItems';
import { FiDownload, FiMail } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { MdMenu } from 'react-icons/md';
import { RxCrossCircled } from 'react-icons/rx';
import { CONSTANTS } from '../utils/constants';
import { useLanguage } from '../hooks/useLanguage';
import { useState } from 'react';

function Header() {
  const { t, currentLanguage } = useLanguage();
  const cvHref = `/cv/CV_Elise_MONTEIRO_${currentLanguage}.pdf`;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-component backdrop-blur-sm">
      <div className="flex justify-between">
        {/* Navigation */}
        <div className="flex items-center justify-center gap-3">
          <nav className="hidden-mobile items-center gap-6">
            <NavItems onClick={scrollToSection} className="icon-btn" />
          </nav>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="icon-btn show-mobile"
          >
            {mobileMenuOpen ? (
              <RxCrossCircled className="icon-header" />
            ) : (
              <MdMenu className="icon-header" />
            )}
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 px-3">
          {/* Download CV Button */}
          <a
            href={cvHref}
            download={`${CONSTANTS.name} ${t(`resume`)}.pdf`}
            className="icon-btn show-pc"
          >
            <FiDownload className="icon-header" />
          </a>

          {/* Github */}
          <a
            href={CONSTANTS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn show-pc"
          >
            <SiGithub className="icon-header" />
          </a>

          {/* Linkedin */}
          <a href={CONSTANTS.linkedin} className="icon-btn show-pc">
            <FaLinkedin className="icon-header" />
          </a>

          {/* Mail */}
          <a href={`mailto:${CONSTANTS.mail}`} className="icon-btn show-pc">
            <FiMail className="icon-header" />
          </a>

          <ToggleDarkMode />

          <LanguageSwitcher />
        </div>
      </div>
      {/* Navigation Mobile Menu */}
      <div>
        {mobileMenuOpen && (
          <nav className="show-mobile bg-subcomponent">
            <div className="flex flex-col">
              <NavItems
                onClick={scrollToSection}
                className="text-left py-1 px-2 text-text-primary border-b border-text-primary"
              />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
