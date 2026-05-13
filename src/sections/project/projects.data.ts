import type { Project } from './projects.types';

export function getProjectsData(
  t: (key: string) => string,
  currentLanguage: string,
  isMobile: boolean
): Project[] {
  return [
    {
      id: 'review',
      isVideo: true,
      media: isMobile
        ? `/project/mobile-review.mp4`
        : `/project/desktop-review.mp4`,
      mediaDescription: t('projects.review.mediaDescription'),
      title: t('projects.review.title'),
      description: t('projects.review.description'),
      features: [
        t('projects.review.features.collaboration'),
        t('projects.review.features.setup'),
        t('projects.review.features.mvcRole'),
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
    },
    {
      id: 'compiler',
      isVideo: false,
      media: `/project/compiler-${currentLanguage}.webp`,
      mediaDescription: t('projects.compiler.mediaDescription'),
      title: t('projects.compiler.title'),
      description: t('projects.compiler.description'),
      features: [
        t('projects.compiler.features.lexSyntax'),
        t('projects.compiler.features.ast'),
        t('projects.compiler.features.amd64Code'),
        t('projects.compiler.features.testCoverage'),
        t('projects.compiler.features.testReport'),
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
    },
    {
      id: 'distribu_calcul',
      isVideo: false,
      media: '/project/distribuCalcul.webp',
      mediaDescription: t('projects.distribuCalcul.mediaDescription'),
      title: t('projects.distribuCalcul.title'),
      description: t('projects.distribuCalcul.description'),
      features: [
        t('projects.distribuCalcul.features.architecture'),
        t('projects.distribuCalcul.features.distributedExecution'),
        t('projects.distribuCalcul.features.connectionHandling'),
        t('projects.distribuCalcul.features.results'),
        t('projects.distribuCalcul.features.nonBlocking'),
      ],
      skills: ['Java', 'TCP', 'IP', 'Threads', 'Jar', 'RFC', 'JUnit', 'Gitlab'],
    },
    {
      id: 'dodge_run',
      isVideo: false,
      media: '/project/dodge-run.png',
      mediaDescription: t('projects.dodgeRun.mediaDescription'),
      title: t('projects.dodgeRun.title'),
      description: t('projects.dodgeRun.description'),
      features: [],
      skills: ['C', 'MLV', 'Makefile', 'Git', 'Redmine'],
    },
  ];
}
