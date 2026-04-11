import Banner from './components/Banner';
import Footer from './layouts/Footer';
import Header from './layouts/header/Header';
import SectionLayout from './layouts/SectionLayout';
import { CONSTANTS } from './utils/constants';

function App() {
  return (
    <div className="min-h-screen bg-primary transition-colors duration-300">
      <Header />
      <main>
        <Banner />
        {CONSTANTS.sections.map((section, index) => {
          const Component = section.component;
          return (
            <SectionLayout
              key={section.id}
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
  );
}

export default App;
