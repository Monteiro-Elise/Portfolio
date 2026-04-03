import Banner from './components/Banner';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import SectionLayout from './layouts/SectionLayout';

function App() {
  const sections = [
    { id: 'about', component: <AboutSection /> },
    { id: 'skills', component: <SkillsSection /> },
    { id: 'projects', component: <ProjectsSection /> },
  ];

  return (
    <div className="min-h-screen bg-primary transition-colors duration-300">
      <Header />
      <main className="pt-9">
        <Banner />
        {sections.map((section, index) => (
          <SectionLayout
            key={index}
            id={section.id}
            index={index}
            total={sections.length}
          >
            {section.component}
          </SectionLayout>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
