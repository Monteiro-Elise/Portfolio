import { useRef } from 'react';

import InViewReveal from '../../components/InViewReveal';
import { useScrollVisibility } from './../../hooks/useScrollVisibility';
import HeaderActions from './HeaderActions';
import HeaderMobileNavToggle from './HeaderMobileNavToggle';
import HeaderNav from './HeaderNav';
import { useNav } from './useNav';

export default function Header() {
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
      {/* Avoid InViewReveal on Header wrapper due to scroll animation conflicts */}
      <InViewReveal delay={300}>
        <div className="flex justify-between py-1 sm:py-0">
          {/* Navigation */}
          <div className="flex items-center justify-center gap-3">
            {/* DesktopNavigation */}
            <HeaderNav
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
            <HeaderNav
              id="mobile-nav"
              ariaLabel="mobile navigation"
              className="mobile-nav show-mobile"
              closeMenu={closeMenu}
            />
          )}
        </div>
      </InViewReveal>
    </header>
  );
}
