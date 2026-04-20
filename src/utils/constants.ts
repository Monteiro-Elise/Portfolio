import AboutSection from './../sections/AboutSection';
import SkillsSection from './../sections/SkillsSection';
import ProjectsSection from './../sections/ProjectsSection';

export const CONSTANTS = {
  languages: ['fr', 'en'],
  name: 'Elise Monteiro',
  mail: 'elise.ma.monteiro@orange.fr',
  linkedin: 'https://www.linkedin.com/in/elise-monteiro-60b752253/',
  github: 'https://github.com/Monteiro-Elise',
  phoneLocal: '07 83 87 00 87',
  phoneInternational: '+33 7 83 87 00 87',
  sections: [
    { id: 'about', component: AboutSection },
    { id: 'skills', component: SkillsSection },
    { id: 'projects', component: ProjectsSection },
  ],
  domain: 'https://portfolio-monteiro-elise.vercel.app',
} as const;
