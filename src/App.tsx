import { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { HelmetProvider } from 'react-helmet-async';

import Banner from './components/Banner';
import { useLanguage } from './hooks/useLanguage';
import Footer from './layouts/Footer';
import Header from './layouts/header/Header';
import SectionLayout from './sections/SectionLayout';
import { getBannerImage } from './utils/assetResolver';
import { CONSTANTS } from './utils/constants';
export default function App() {
  const { t } = useLanguage();

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
        <meta property="og:image" content="/preview.jpg" />
        <meta property="og:url" content={CONSTANTS.domain} />
        <link
          rel="preload"
          as="image"
          href={getBannerImage()}
          fetchPriority="high"
          type="image/webp"
        />
      </Helmet>
      <div className="min-h-screen bg-primary">
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
