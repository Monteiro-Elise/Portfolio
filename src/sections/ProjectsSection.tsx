import Project from '../components/Project';
import { useLanguage } from '../hooks/useLanguage';

function ProjectsSection() {
  const { t } = useLanguage();
  const projects = [
    {
      isVideo: true,
      media: '/projet1.mp4',
      title: t('projects.project1.title'),
      year: 2022,
      description: t('projects.project1.description'),
      skills: ['CSS', 'HTML', 'JavaScript'],
      githubLink: 'https://github.com',
      demoLink: 'https://demo.com',
    },
    {
      isVideo: false,
      media: '/projet2.png',
      title: t('projects.project2.title'),
      year: 2020,
      description: t('projects.project2.description'),
      skills: ['CSS', 'HTML'],
      githubLink: '',
      demoLink: '',
    },
  ];

  return (
    <>
      {projects.map((project, index) => (
        <Project key={index} bool={index % 2 === 0} {...project} />
      ))}
    </>
  );
}

export default ProjectsSection;
