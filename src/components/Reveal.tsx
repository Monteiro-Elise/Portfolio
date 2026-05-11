import { type ReactNode } from 'react';
import { useRef } from 'react';

import { useVisibility } from '../hooks/useVisibility';

type RevealProps = {
  children: ReactNode;
  delay?: number;
};

export default function Reveal({ children, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useVisibility(ref, { threshold: 0.15 });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        transition-[opacity, transform]
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
    >
      {children}
    </div>
  );
}
