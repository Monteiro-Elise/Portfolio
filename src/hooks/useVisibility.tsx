import { type RefObject, useEffect, useState } from 'react';

type UseVisibilityOptions = {
  threshold?: number;
  rootMargin?: string;
  root?: Element | null;
};

export function useVisibility<T extends HTMLElement>(
  ref: RefObject<T | null>,
  options: UseVisibilityOptions = {}
) {
  const { threshold = 0, rootMargin = '0px', root = null } = options;
  const [isVisible, setIsVisible] = useState(
    typeof IntersectionObserver === 'undefined'
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect(); //once
      },
      { threshold, rootMargin, root }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, rootMargin, root]);

  return isVisible;
}
