import { useMemo } from 'react';

import { useIsMobile } from '../../hooks/useIsMobile';
import { useLanguage } from '../../hooks/useLanguage';
import ProjectItem from './ProjectItem';
import { getProjectsData } from './projects.data';

export default function ProjectsSection() {
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
          <ProjectItem isTextRight={index % 2 === 0} project={project} />
        </li>
      ))}
    </ul>
  );
}
