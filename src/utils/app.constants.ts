import { lazy } from 'react';

import AboutSection from '../sections/AboutSection'; // No lazy loading because this section is visible immediately on initial render.

const SkillsSection = lazy(() => import('../sections/skill/SkillsSection'));
const ProjectsSection = lazy(
  () => import('../sections/project/ProjectsSection')
);

export const SECTIONS = [
  { id: 'about', component: AboutSection },
  { id: 'skills', component: SkillsSection },
  { id: 'projects', component: ProjectsSection },
] as const;
