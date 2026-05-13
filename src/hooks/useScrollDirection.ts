import { useEffect, useState } from 'react';

const THRESHOLD = 8;
type ScrollDirection = 'up' | 'down';

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('up');

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
            setScrollDirection(delta < 0 ? 'up' : 'down');
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

  return { scrollDirection };
}
