import { CONSTANTS } from '../../utils/constants';
import { useLanguage } from '../../hooks/useLanguage';
interface NavItemsProps {
  id: string;
  ariaLabel: string;
  className: string;
  closeMenu: () => void;
}

function Nav({ id, ariaLabel, closeMenu, className }: NavItemsProps) {
  const { t } = useLanguage();
  return (
    <nav id={id} aria-label={ariaLabel} className={className}>
      <ul>
        {CONSTANTS.sections.map((section, index) => (
          <li key={index}>
            <a
              href={`#title-section-${section.id}`}
              onClick={() => closeMenu()}
              aria-label={t('aria-label.nav', {
                section: t(`sections.${section.id}`),
              })}
            >
              <b>{t(`sections.${section.id}`)}</b>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
