import { SkillsCategory } from '../components/SkillsCategory';
import { useLanguage } from '../hooks/useLanguage';
import {
  FaGitAlt,
  FaPython,
  FaDocker,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaAngular,
  FaVuejs,
  FaNodeJs,
  FaDatabase,
} from 'react-icons/fa';
import { FaC } from 'react-icons/fa6';
import { FaGolang } from 'react-icons/fa6';
import {
  SiGithubactions,
  SiPhp,
  SiIntellijidea,
  SiKotlin,
  SiTypescript,
  SiDjango,
  SiSpring,
  SiMongodb,
} from 'react-icons/si';
import { BiLogoVisualStudio } from 'react-icons/bi';
import { DiEclipse, DiJavascript1, DiRedis } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';
import { BiLogoPostgresql } from 'react-icons/bi';

function SkillsSection() {
  const { t } = useLanguage();
  const skillsData = [
    {
      category: t('category.languages'),
      skills: [
        { name: 'Python', icon: FaPython },
        { name: 'Java', icon: FaJava },
        { name: 'C', icon: FaC },
        { name: 'PHP', icon: SiPhp },
        { name: 'Go', icon: FaGolang },
        { name: 'Kotlin', icon: SiKotlin },
        { name: 'Javascript', icon: DiJavascript1 },
        { name: 'Typescript', icon: SiTypescript },
        { name: 'HTML', icon: FaHtml5 },
        { name: 'CSS', icon: FaCss3Alt },
      ],
    },
    {
      category: t('category.frameworks'),
      skills: [
        { name: 'Django', icon: SiDjango },
        { name: 'Spring', icon: SiSpring },
        { name: 'React', icon: FaReact },
        { name: 'Angular', icon: FaAngular },
        { name: 'Vue.js', icon: FaVuejs },
        { name: 'Node.js', icon: FaNodeJs },
      ],
    },
    {
      category: t('category.databases'),
      skills: [
        { name: 'SQL', icon: FaDatabase },
        { name: 'PostgreSQL', icon: BiLogoPostgresql },
        { name: 'MySQL', icon: GrMysql },
        { name: 'NoSQL', icon: FaDatabase },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Redis', icon: DiRedis },
      ],
    },
    {
      category: t('category.tools'),
      skills: [
        { name: 'Git', icon: FaGitAlt },
        { name: 'CI/CD', icon: SiGithubactions },
        { name: 'Docker', icon: FaDocker },
        { name: 'Visual Studio Code', icon: BiLogoVisualStudio },
        { name: 'Eclipse', icon: DiEclipse },
        { name: 'IntelliJ', icon: SiIntellijidea },
      ],
    },
  ];

  return (
    <ul className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillsData.map((category, id) => (
        <li key={id}>
          <SkillsCategory
            category={category.category}
            skills={category.skills}
          />
        </li>
      ))}
    </ul>
  );
}

export default SkillsSection;
