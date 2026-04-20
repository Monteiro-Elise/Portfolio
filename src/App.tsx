import Banner from './components/Banner';
import Footer from './layouts/Footer';
import Header from './layouts/header/Header';
import SectionLayout from './layouts/SectionLayout';
import { useLanguage } from './hooks/useLanguage';
import { CONSTANTS } from './utils/constants';
import { Helmet } from 'react-helmet-async';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const { t, currentLanguage } = useLanguage();

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
                <Component />
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
