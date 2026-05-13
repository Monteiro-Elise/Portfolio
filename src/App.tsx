import { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { HelmetProvider } from 'react-helmet-async';

import InViewReveal from './components/InViewReveal';
import { getInitialDarkMode } from './hooks/useDarkMode';
import { useLanguage } from './hooks/useLanguage';
import { getInitialIsMobile } from './hooks/useMobile';
import Footer from './layouts/Footer';
import Header from './layouts/header/Header';
import HeroSection from './sections/HeroSection';
import SectionContainer from './sections/SectionContainer';
import { CONSTANTS } from './utils/constants';

export default function App() {
  const { t } = useLanguage();
  const isDarkMode = getInitialDarkMode();
  const device = getInitialIsMobile() ? 'mobile-hero' : 'desktop-hero';

  return (
    <HelmetProvider>
      <Helmet>
        <title>{t('title', { name: CONSTANTS.name })}</title>

        <meta name="description" content={t('description')} />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="author" content={CONSTANTS.name} />

        <meta
          property="og:title"
          content={t('title', { name: CONSTANTS.name })}
        />
        <meta property="og:description" content={t('description')} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/site-preview.png" />
        <meta property="og:url" content={CONSTANTS.domain} />
        <link
          rel="preload"
          as="image"
          href={`/hero/${device}${isDarkMode ? '-dark' : ''}.webp`}
          fetchPriority="high"
          type="image/webp"
        />
        <link
          rel="prefetch"
          as="image"
          href={`/hero/${device}${isDarkMode ? '' : '-dark'}.webp`}
          type="image/webp"
        />
      </Helmet>
      <div className="min-h-screen bg-primary">
        <Header />
        <main>
          <InViewReveal delay={100}>
            <HeroSection />
          </InViewReveal>
          {CONSTANTS.sections.map((section, index) => {
            const Component = section.component;
            return (
              <SectionContainer
                key={index}
                id={section.id}
                index={index}
                total={CONSTANTS.sections.length}
              >
                <Suspense>
                  <Component />
                </Suspense>
              </SectionContainer>
            );
          })}
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
