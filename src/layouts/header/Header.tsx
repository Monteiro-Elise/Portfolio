import { useState } from 'react';
import { useScrollVisibility } from './../../hooks/useScrollVisibility';
import HeaderActions from './HeaderActions';
import HeaderDesktopNav from './HeaderDesktopNav';
import HeaderMobileNavMenu from './HeaderMobileNavMenu';
import HeaderMobileNavToggle from './HeaderMobileNavToggle';

function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileNavMenuOpen(false);
    }
  };
  const [isMobileNavMenuOpen, setIsMobileNavMenuOpen] = useState(false);
  const isVisible = useScrollVisibility();

  return (
    <header
      className={`sticky top-0 py-1 sm:py-0 left-0 z-50 w-full bg-component backdrop-blur-sm transition-transform duration-300 ${
        isVisible || isMobileNavMenuOpen ? 'translate-y-0' : '-translate-y-full'
      } shadow`}
    >
      <div className="flex justify-between">
        {/* Navigation */}
        <div className="flex items-center justify-center gap-3">
          <HeaderDesktopNav scrollToSection={scrollToSection} />

          {/* MobileNavigation */}
          <HeaderMobileNavToggle
            isOpen={isMobileNavMenuOpen}
            setIsOpen={setIsMobileNavMenuOpen}
          />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 px-3">
          <HeaderActions />
        </div>
      </div>

      {/* Navigation Mobile Menu */}
      <div>
        {isMobileNavMenuOpen && (
          <HeaderMobileNavMenu scrollToSection={scrollToSection} />
        )}
      </div>
    </header>
  );
}

export default Header;
