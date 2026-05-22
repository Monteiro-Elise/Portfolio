import InViewReveal from '../components/InViewReveal';
import { useLanguage } from '../hooks/useLanguage';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <InViewReveal delay={200}>
      <div className="section-content">
        <div className="text-lg leading-relaxed space-y-8">
          <p>{t('about.construction')}</p>
          <p>
            {t('about.intro')} {t('about.passion')}
          </p>
          <p>{t('about.skills')}</p>
          <p>{t('about.contact')}</p>
        </div>
      </div>
    </InViewReveal>
  );
}
