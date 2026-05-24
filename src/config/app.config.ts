import { env } from './env';

const phoneNumber = '7 83 87 00 87';

export const appConfig = {
  name: 'Elise Monteiro',
  i18n: {
    // Hardcoded in index.html for initial language setup
    defaultLanguage: 'en',
    supportedLanguages: ['fr', 'en'],
    languageStorageKey: 'i18nextLng',
  },
  contact: {
    email: 'elise.ma.monteiro@orange.fr',
    linkedin: 'https://www.linkedin.com/in/elise-monteiro-60b752253/',
    github: 'https://github.com/Monteiro-Elise',
    localPhone: `0${phoneNumber}`,
    internationalPhone: `+33 ${phoneNumber}`,
  },
  theme: {
    themeStorageKey: 'theme',
  },
  siteUrl: env.appUrl,
} as const;
