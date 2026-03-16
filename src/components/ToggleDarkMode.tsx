import { FiMoon, FiSun } from 'react-icons/fi';
import useDarkMode from '../hooks/useDarkMode';

export default function ToggleDarkMode() {
  const { toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-md text-accent transition-opacity hover:opacity-70"
    >
      <FiMoon className="h-5 w-5 dark:hidden" />
      <FiSun className="hidden h-5 w-5 dark:block" />
    </button>
  );
}
