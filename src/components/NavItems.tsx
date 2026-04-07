import { CONSTANTS } from '../utils/constants';
import { useLanguage } from '../hooks/useLanguage';
interface NavItemsProps {
  onClick: (id: string) => void;
  className?: string;
}

function NavItems({ onClick, className }: NavItemsProps) {
  const { t } = useLanguage();
  return (
    <>
      {CONSTANTS.sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onClick(section.id)}
          className={className}
        >
          {t(`sections.${section.id}`)}
        </button>
      ))}
    </>
  );
}

export default NavItems;
