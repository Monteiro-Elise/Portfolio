const requiredEnv = import.meta.env.VITE_APP_URL;

if (!requiredEnv) {
  throw new Error('VITE_APP_URL is missing');
}

export const env = {
  appUrl: requiredEnv,
} as const;
