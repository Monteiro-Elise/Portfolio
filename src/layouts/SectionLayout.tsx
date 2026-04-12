import type { ReactNode } from 'react';
import { DiagonalSeparator } from '../components/DiagonalSeparator';
import { useLanguage } from '../hooks/useLanguage';

interface Props {
  id: string;
  index: number;
  total: number;
  children: ReactNode;
}

export default function SectionLayout({ id, index, total, children }: Props) {
  const { t } = useLanguage();
  const colors = ['bg-primary', 'bg-secondary'];
  const bg = colors[index % 2];
  const nextBg = colors[(index + 1) % 2];
  const isLast = index !== total - 1;

  return (
    <div className="-mb-1">
      <section id={id} className={`py-20 scroll-mt-40 sm:scroll-mt-0 ${bg}`}>
        <div className="container mx-auto px-4">
          <h2>{t(`sections.${id}`)}</h2>
          <div className="section-content">{children}</div>
        </div>
      </section>

      {isLast && <DiagonalSeparator fromColor={bg} toColor={nextBg} />}
    </div>
  );
}
