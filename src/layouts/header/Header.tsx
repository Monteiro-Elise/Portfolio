import { useRef } from 'react';
import HeaderActions from './HeaderActions';
import HeaderMobileNavToggle from './HeaderMobileNavToggle';
import Nav from './Nav';
import { useNav } from './useNav';
import { useScrollVisibility } from './../../hooks/useScrollVisibility';

function Header() {
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const { setIsMobileNavMenuOpen, isMobileNavMenuOpen } = useNav({
    buttonRef,
    menuRef,
  });
  const { isVisible } = useScrollVisibility();
  const closeMenu = () => {
    setIsMobileNavMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 left-0 z-50 w-full bg-component backdrop-blur-sm transition-transform duration-500 ${
        isVisible || isMobileNavMenuOpen ? 'translate-y-0' : '-translate-y-full'
      } shadow`}
    >
      <div className="flex justify-between py-1 sm:py-0">
        {/* Navigation */}
        <div className="flex items-center justify-center gap-3">
          {/* DesktopNavigation */}
          <Nav
            id="desktop-nav"
            ariaLabel="desktop navigation"
            className="desktop-nav hidden-mobile"
            closeMenu={() => {}}
          />

          {/* MobileNavigationToggle */}
          <div ref={buttonRef}>
            <HeaderMobileNavToggle
              isOpen={isMobileNavMenuOpen}
              setIsOpen={setIsMobileNavMenuOpen}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 px-3">
          <HeaderActions />
        </div>
      </div>

      {/* MobileNavigation */}
      <div ref={menuRef}>
        {isMobileNavMenuOpen && (
          <Nav
            id="mobile-nav"
            ariaLabel="mobile navigation"
            className="mobile-nav show-mobile"
            closeMenu={closeMenu}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
