import { type RefObject, useEffect, useState } from 'react';

type UseFirstInViewOptions = {
  threshold?: number;
  rootMargin?: string;
  root?: Element | null;
};

export function useFirstInView<T extends HTMLElement>(
  ref: RefObject<T | null>,
  options: UseFirstInViewOptions = {}
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
