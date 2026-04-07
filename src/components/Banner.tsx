import { CONSTANTS } from '../utils/constants';
import { FiPhone, FiMail } from 'react-icons/fi';
import { useLanguage } from '../hooks/useLanguage';

function Banner() {
  const { t, currentLanguage } = useLanguage();
  return (
    <div className="h-40 md:h-56 bg-banner bg-cover bg-center">
      <div className="relative z-10 container mx-auto px-4 pt-9">
        <div className="flex justify-end">
          <div className="max-w-lg text-right">
            <p className="text-2xl md:text-6xl text-white mb-2">
              {CONSTANTS.name}
            </p>
            <p className="text-xl md:text-3xl mb-2 md:mb-6 text-other">
              {t('job')}
            </p>
            <div className="flex items-center justify-end gap-2 text-white">
              <FiPhone className="icon-decoration" />
              <span className="text-sm md:text-base">
                {currentLanguage === 'fr'
                  ? CONSTANTS.phoneLocal
                  : CONSTANTS.phoneInternational}
              </span>
            </div>
            <div className="flex items-center justify-end gap-2 text-white">
              <FiMail className="icon-decoration" />
              <span className="text-sm md:text-base">{CONSTANTS.mail}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
