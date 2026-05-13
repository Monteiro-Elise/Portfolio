import { useLanguage } from '../../hooks/useLanguage';
import { CONSTANTS } from '../../utils/constants';

type HeaderNavProps = {
  id: string;
  ariaLabel: string;
  className: string;
  closeMenu: () => void;
};

export default function HeaderNav({
  id,
  ariaLabel,
  closeMenu,
  className,
}: HeaderNavProps) {
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
