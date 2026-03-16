interface DiagonalSeparatorProps {
  fromColor: string;
  toColor: string;
}

export function DiagonalSeparator({
  fromColor,
  toColor,
}: DiagonalSeparatorProps) {
  return (
    <div className="relative h-16 md:h-24">
      <div
        className={fromColor}
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)',
          position: 'absolute',
          inset: 0,
        }}
      ></div>
      <div
        className={toColor}
        style={{
          clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
          position: 'absolute',
          inset: 0,
        }}
      ></div>
    </div>
  );
}
