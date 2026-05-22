import { type RefObject, useEffect, useState } from 'react';

export function useMobileNav<T extends HTMLElement, U extends HTMLElement>({
  buttonRef,
  menuRef,
}: {
  buttonRef: RefObject<T | null>;
  menuRef: RefObject<U | null>;
}) {
  const [isMobileNavMenuOpen, setIsMobileNavMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobileNavMenuOpen || !menuRef.current || !buttonRef.current) return;
    menuRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();

    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !menuRef.current ||
        !buttonRef.current ||
        menuRef.current.contains(target) ||
        buttonRef.current.contains(target)
      ) {
        return;
      }
      setIsMobileNavMenuOpen(false);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as Node;

      if (e.key === 'Escape') {
        setIsMobileNavMenuOpen(false);
        buttonRef.current?.querySelector<HTMLButtonElement>('button')?.focus();
        return;
      }

      if (
        !(e.key === 'Enter' || e.key === ' ' || e.code === 'Space') ||
        buttonRef.current?.contains(target) ||
        menuRef.current?.contains(target)
      ) {
        return;
      }
      setIsMobileNavMenuOpen(false);
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileNavMenuOpen, buttonRef, menuRef]);
  return { isMobileNavMenuOpen, setIsMobileNavMenuOpen };
}
