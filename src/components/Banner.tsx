import { CONSTANTS } from '../utils/constants';
import { FiPhone, FiMail } from 'react-icons/fi';
import { useLanguage } from '../hooks/useLanguage';

function Banner() {
  const { t, currentLanguage } = useLanguage();
  return (
    <section id="banner" className="h-32 md:h-54 bg-banner bg-cover bg-center">
      <div className="relative z-10 container mx-auto px-4 pt-1 md:pt-4">
        <div className="flex justify-end">
          <div className="max-w-lg text-right">
            <h1>{CONSTANTS.name}</h1>
            <div className="text-xl md:text-3xl mb-2 md:mb-6 text-other">
              <span>{t('job')}</span>
            </div>
            <div className="flex items-center justify-end gap-2 text-white">
              <FiPhone className="icon-decoration" aria-hidden="true" />
              <span className="text-sm md:text-base">
                {currentLanguage === 'fr'
                  ? CONSTANTS.phoneLocal
                  : CONSTANTS.phoneInternational}
              </span>
            </div>
            <div className="flex items-center justify-end gap-2 text-white">
              <FiMail className="icon-decoration" aria-hidden="true" />
              <span className="text-sm md:text-base">{CONSTANTS.mail}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Banner;
