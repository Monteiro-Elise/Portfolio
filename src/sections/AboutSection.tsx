import { memo } from 'react';

import Reveal from '../components/Reveal';
import { useLanguage } from '../hooks/useLanguage';

const AboutSection = memo(function AboutSection() {
  const { t } = useLanguage();

  const aboutSection = {
    construction: t('about.construction'),
    intro: t('about.intro'),
    passion: t('about.passion'),
    skills: t('about.skills'),
    contact: t('about.contact'),
  };

  return (
    <Reveal delay={200}>
      <div className="section-content">
        <div className="text-lg leading-relaxed space-y-8">
          <p>{aboutSection.construction}</p>
          <p>
            {aboutSection.intro} {aboutSection.passion}
          </p>
          <p>{aboutSection.skills}</p>
          <p>{aboutSection.contact}</p>
        </div>
      </div>
    </Reveal>
  );
});

export default AboutSection;
