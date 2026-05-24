import type { ReactNode } from 'react';

import DiagonalSeparator from '../components/DiagonalSeparator';
import InViewReveal from '../components/InViewReveal';
import { useLanguage } from '../hooks/useLanguage';

type SectionContainerProps = {
  id: string;
  index: number;
  total: number;
  children: ReactNode;
};

export default function SectionContainer({
  id,
  index,
  total,
  children,
}: SectionContainerProps) {
  const { t } = useLanguage();
  const bgColors = ['bg-primary', 'bg-secondary'];
  const bg = bgColors[index % 2];
  const nextBg = bgColors[(index + 1) % 2];
  const isNotLast = index !== total - 1;

  return (
    <div className="-mb-1">
      <section
        id={`section-${id}`}
        aria-labelledby={`title-section-${id}`}
        className={`py-20 ${bg}`}
      >
        <div className="container mx-auto px-4">
          <InViewReveal delay={200}>
            <h2 id={`title-section-${id}`} className="scroll-mt-15">
              {t(`sections.${id}`)}
            </h2>
          </InViewReveal>
          <div className="section-content">{children}</div>
        </div>
      </section>

      {isNotLast && <DiagonalSeparator fromColor={bg} toColor={nextBg} />}
    </div>
  );
}
