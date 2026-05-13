import { FiMoon, FiSun } from 'react-icons/fi';

import { useDarkMode } from '../hooks/useDarkMode';
import { useLanguage } from '../hooks/useLanguage';

export default function DarkModeToggle() {
  const { t } = useLanguage();
  const { darkModeToggle } = useDarkMode();

  return (
    <button
      onClick={darkModeToggle}
      className="icon-btn"
      aria-label={t('aria-label.theme')}
    >
      <FiMoon className="icon-header dark:hidden" aria-hidden="true" />
      <FiSun className="hidden icon-header dark:block" aria-hidden="true" />
    </button>
  );
}
