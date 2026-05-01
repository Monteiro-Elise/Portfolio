import { useEffect, useState } from 'react';

export function useScrollVisibility() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          setIsVisible(currentScrollY < lastScrollY);

          lastScrollY = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isVisible };
}
