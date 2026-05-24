import { memo } from 'react';

import { useLanguage } from '../../hooks/useLanguage';
import { SECTIONS } from '../../utils/app.constants';

type HeaderNavProps = {
  id: string;
  ariaLabel: string;
  className: string;
  closeMenu?: () => void;
};

function HeaderNav({ id, ariaLabel, closeMenu, className }: HeaderNavProps) {
  const { t } = useLanguage();
  return (
    <nav id={id} aria-label={ariaLabel} className={className}>
      <ul>
        {SECTIONS.map((section, index) => (
          <li key={index}>
            <a
              href={`#title-section-${section.id}`}
              onClick={() => closeMenu?.()}
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

export default memo(HeaderNav);
