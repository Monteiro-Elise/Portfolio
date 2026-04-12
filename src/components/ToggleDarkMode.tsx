import { FiMoon, FiSun } from 'react-icons/fi';
import useDarkMode from '../hooks/useDarkMode';
import { useLanguage } from '../hooks/useLanguage';

export default function ToggleDarkMode() {
  const { t } = useLanguage();
  const { toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="icon-btn"
      aria-label={t('aria-label.theme')}
    >
      <FiMoon className="icon-header dark:hidden" aria-hidden="true" />
      <FiSun className="hidden icon-header dark:block" aria-hidden="true" />
    </button>
  );
}
