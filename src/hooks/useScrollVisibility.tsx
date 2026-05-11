import { useEffect, useState } from 'react';

const THRESHOLD = 8;

export function useScrollVisibility() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const delta = currentScrollY - lastScrollY;

          if (delta * delta >= THRESHOLD * THRESHOLD) {
            //faster than with Math.abs
            setIsVisible(delta < 0);
            lastScrollY = currentScrollY;
          }

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
