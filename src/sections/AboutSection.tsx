import { useLanguage } from '../hooks/useLanguage';
import { memo } from 'react';

const AboutSection = memo(function AboutSection() {
  const { t } = useLanguage();

  const about = {
    construction: t('about.construction'),
    intro: t('about.intro'),
    passion: t('about.passion'),
    skills: t('about.skills'),
    contact: t('about.contact'),
  };

  return (
    <div className="section-content">
      <div className="text-lg leading-relaxed space-y-8">
        <p>{about.construction}</p>
        <p>
          {about.intro} {about.passion}
        </p>
        <p>{about.skills}</p>
        <p>{about.contact}</p>
      </div>
    </div>
  );
});

export default AboutSection;
