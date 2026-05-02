import Project from '../components/Project';
import { useLanguage } from '../hooks/useLanguage';
import { useIsMobile } from '../hooks/useIsMobile';
import { getProjectsData } from './ProjectsData';
import { useMemo } from 'react';

function ProjectsSection() {
  const { t, currentLanguage } = useLanguage();
  const isMobile = useIsMobile();
  const projects = useMemo(
    () => getProjectsData(t, currentLanguage, isMobile),
    [t, currentLanguage, isMobile]
  );

  return (
    <ul>
      {projects.map((project, index) => (
        <li key={index}>
          <Project bool={index % 2 === 0} {...project} />
        </li>
      ))}
    </ul>
  );
}

export default ProjectsSection;
