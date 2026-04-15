import Project from '../components/Project';
import { useLanguage } from '../hooks/useLanguage';

function ProjectsSection() {
  const { t, currentLanguage } = useLanguage();
  const projects = [
    {
      isVideo: true,
      media: '/project/review.mp4',
      mediaDescription: t('projects.review.media_description'),
      title: t('projects.review.title'),
      description: t('projects.review.description'),
      features: [
        t('projects.review.features.collaboration'),
        t('projects.review.features.setup'),
        t('projects.review.features.mvc_role'),
        t('projects.review.features.secure'),
        t('projects.review.features.test'),
      ],
      skills: [
        'Java',
        'Vue.js',
        'Thymeleaf',
        'Kotlin',
        'Spring Data',
        'Spring Security',
        'Spring Boot',
        'Hibernate',
        'H2',
        'CSS',
        'HTML',
        'Javascript',
        'Maven',
        'JUnit',
        'Gitlab',
        'SCRUM',
      ],
      githubLink: '',
      demoLink: '',
    },
    {
      isVideo: false,
      media: `/project/compiler_${currentLanguage}.png`,
      mediaDescription: t('projects.compiler.media_description'),
      title: t('projects.compiler.title'),
      description: t('projects.compiler.description'),
      features: [
        t('projects.compiler.features.lex_syntax'),
        t('projects.compiler.features.ast'),
        t('projects.compiler.features.amd64_code'),
        t('projects.compiler.features.test_coverage'),
        t('projects.compiler.features.test_report'),
      ],
      skills: [
        'C',
        'Flex',
        'Bison',
        'NASM',
        'AMD64',
        'Makefile',
        'Linux',
        'Bash',
        'Git',
        'Redmine',
      ],
      githubLink: '',
      demoLink: '',
    },
    {
      isVideo: false,
      media: '/project/distribuCalcul.png',
      mediaDescription: t('projects.distribu_calcul.media_description'),
      title: t('projects.distribu_calcul.title'),
      description: t('projects.distribu_calcul.description'),
      features: [
        t('projects.distribu_calcul.features.architecture'),
        t('projects.distribu_calcul.features.distributed_execution'),
        t('projects.distribu_calcul.features.connection_handling'),
        t('projects.distribu_calcul.features.results'),
        t('projects.distribu_calcul.features.non_blocking'),
      ],
      skills: ['Java', 'TCP', 'IP', 'Threads', 'Jar', 'RFC', 'JUnit', 'Gitlab'],
      githubLink: '',
      demoLink: '',
    },
    {
      isVideo: false,
      media: '/project/dodgeRun.png',
      mediaDescription: t('projects.dodge_run.media_description'),
      title: t('projects.dodge_run.title'),
      description: t('projects.dodge_run.description'),
      features: [],
      skills: ['C', 'MLV', 'Makefile', 'Git', 'Redmine'],
      githubLink: '',
      demoLink: '',
    },
  ];

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
