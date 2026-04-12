import { CONSTANTS } from '../../utils/constants';
import { useLanguage } from '../../hooks/useLanguage';
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
          aria-label={t('aria-label.nav', {
            section: t(`sections.${section.id}`),
          })}
        >
          <b>{t(`sections.${section.id}`)}</b>
        </button>
      ))}
    </>
  );
}

export default NavItems;
