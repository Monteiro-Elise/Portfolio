import { useState, useEffect, useRef } from 'react';
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
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMobileNavMenuOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      if (menuRef.current?.contains(target)) return;

      setIsMobileNavMenuOpen(false);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileNavMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileNavMenuOpen]);

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
      <div ref={menuRef}>
        <HeaderMobileNavMenu
          scrollToSection={scrollToSection}
          isOpen={isMobileNavMenuOpen}
        />
      </div>
    </header>
  );
}

export default Header;
