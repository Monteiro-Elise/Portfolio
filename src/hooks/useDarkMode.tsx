import { useCallback, useEffect, useState } from 'react';

export function getInitialDarkMode(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
  } catch {
    //nothing
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches;
}

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Sync theme mode changes across tabs.
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (
        e.key !== 'theme' ||
        (e.newValue !== 'dark' && e.newValue !== 'light')
      ) {
        return;
      }
      setIsDarkMode(e.newValue === 'dark');
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  return { isDarkMode, toggleDarkMode };
}
