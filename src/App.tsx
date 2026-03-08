import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import LanguageSwitcher from './components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import ToggleDarkMode from './components/ToggleDarkMode';

function App() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-white dark:bg-black">
        <ToggleDarkMode />
        <div>
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <LanguageSwitcher />
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            {t('count')} {count}
          </button>
          <p>
            {t('edit')} <code>src/App.tsx</code> {t('save')}
          </p>
        </div>
        <p className="read-the-docs">{t('clic-logos')}</p>
      </div>
    </>
  );
}

export default App;
