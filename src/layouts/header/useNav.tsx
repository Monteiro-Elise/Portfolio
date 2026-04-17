import { useEffect, useState, type RefObject } from 'react';

type Props = {
  buttonRef: RefObject<HTMLDivElement | null>;
  menuRef: RefObject<HTMLDivElement | null>;
};

export function useNav({ buttonRef, menuRef }: Props) {
  const [isMobileNavMenuOpen, setIsMobileNavMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobileNavMenuOpen) {
      return;
    }
    const firstLink = menuRef.current?.querySelector<HTMLAnchorElement>('a');
    firstLink?.focus();

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      if (menuRef.current?.contains(target)) return;

      setIsMobileNavMenuOpen(false);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as Node;

      if (e.key === 'Escape') {
        setIsMobileNavMenuOpen(false);
        const b = buttonRef.current?.querySelector<HTMLButtonElement>('button');
        b?.focus();
        return;
      }

      if (!(e.key === 'Enter' || e.key === ' ' || e.code === 'Space')) return;

      if (buttonRef.current?.contains(target)) {
        return;
      }

      if (!menuRef.current?.contains(target)) {
        setIsMobileNavMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileNavMenuOpen, buttonRef, menuRef]);
  return { setIsMobileNavMenuOpen, isMobileNavMenuOpen };
}
