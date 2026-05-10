import { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { HelmetProvider } from 'react-helmet-async';

import Banner from './components/Banner';
import useDarkMode from './hooks/useDarkMode';
import { useIsMobile } from './hooks/useIsMobile';
import { useLanguage } from './hooks/useLanguage';
import Footer from './layouts/Footer';
import Header from './layouts/header/Header';
import SectionLayout from './sections/SectionLayout';
import { CONSTANTS } from './utils/constants';

function App() {
  const { t, currentLanguage } = useLanguage();
  const { isDarkMode } = useDarkMode();
  const isMobile = useIsMobile();

  return (
    <HelmetProvider>
      <Helmet>
        <html lang={currentLanguage} />

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
        <meta property="og:image" content="/preview.jpg" />
        <meta property="og:url" content={CONSTANTS.domain} />
        {isDarkMode ? (
          <link
            rel="preload"
            as="image"
            href={
              isMobile
                ? '/banner/mobile_banner_dark.webp'
                : '/banner/banner_dark.webp'
            }
            fetchPriority="high"
            type="image/webp"
          />
        ) : (
          <link
            rel="preload"
            as="image"
            href={
              isMobile ? '/banner/mobile_banner.webp' : '/banner/banner.webp'
            }
            fetchPriority="high"
            type="image/webp"
          />
        )}
      </Helmet>
      <div className="min-h-screen bg-primary transition-colors duration-300">
        <Header />
        <main>
          <Banner />
          {CONSTANTS.sections.map((section, index) => {
            const Component = section.component;
            return (
              <SectionLayout
                key={index}
                id={section.id}
                index={index}
                total={CONSTANTS.sections.length}
              >
                <Suspense fallback={null}>
                  <Component />
                </Suspense>
              </SectionLayout>
            );
          })}
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
