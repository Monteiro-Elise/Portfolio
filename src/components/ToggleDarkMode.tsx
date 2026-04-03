import { FiMoon, FiSun } from 'react-icons/fi';
import useDarkMode from '../hooks/useDarkMode';

export default function ToggleDarkMode() {
  const { toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className="icon-btn">
      <FiMoon className="icon-header dark:hidden" />
      <FiSun className="hidden icon-header dark:block" />
    </button>
  );
}
