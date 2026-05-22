import { memo } from 'react';

import { appConfig } from '../../config/app.config';
import { useLanguage } from '../../hooks/useLanguage';

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
        {appConfig.sections.map((section, index) => (
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
