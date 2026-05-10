import { type RefObject, useEffect, useState } from 'react';

export function useVisibility<T extends HTMLElement>(ref: RefObject<T | null>) {
  const threshold = 0;
  const rootMargin = '100px';

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isVisible;
}
