import { useLanguage } from '../hooks/useLanguage';

function AboutSection() {
  const { t } = useLanguage();
  return (
    <div className="section-content">
      <div className="text-lg leading-relaxed">
        <p>{t('about.construction')}</p>
        <br />
        <p>
          {t('about.intro')} {t('about.passion')}
        </p>
        <br />
        <p>{t('about.skills')}</p>
        <br />
        <p>{t('about.contact')}</p>
      </div>
    </div>
  );
}

export default AboutSection;
