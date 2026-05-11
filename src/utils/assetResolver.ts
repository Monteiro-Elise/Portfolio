import { getInitialDarkMode } from '../hooks/useDarkMode';
import { getInitialIsMobile } from '../hooks/useIsMobile';

export function getBannerImage() {
  const isDarkMode = getInitialDarkMode();
  const isMobile = getInitialIsMobile();

  const device = isMobile ? 'mobile_banner' : 'banner';
  const theme = isDarkMode ? '_dark' : '';

  return `/banner/${device}${theme}.webp`;
}
