import { Moon, Sun } from 'lucide-react';
import useDarkMode from '../hooks/useDarkMode';

export default function ToggleDarkMode() {
  const { toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-md text-accent transition-opacity hover:opacity-70"
    >
      <Moon className="h-5 w-5 dark:hidden" />
      <Sun className="hidden h-5 w-5 dark:block" />
    </button>
  );
}
