import type { ReactNode } from 'react';
import { DiagonalSeparator } from '../components/DiagonalSeparator';

interface Props {
  index: number;
  total: number;
  children: ReactNode;
}

export default function SectionLayout({ index, total, children }: Props) {
  const colors = ['bg-primary', 'bg-secondary'];
  const bg = colors[index % 2];
  const nextBg = colors[(index + 1) % 2];
  const isLast = index !== total - 1;

  return (
    <div>
      <section className={`py-12 ${bg}`}>{children}</section>

      {isLast && <DiagonalSeparator fromColor={bg} toColor={nextBg} />}
    </div>
  );
}
