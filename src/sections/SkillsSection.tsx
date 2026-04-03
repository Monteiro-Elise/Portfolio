import { SkillsCategory } from '../components/SkillsCategory';
import { FiMoon, FiSun, FiPhone, FiMail } from 'react-icons/fi';
import { useLanguage } from '../hooks/useLanguage';

function SkillsSection() {
  const { t } = useLanguage();
  const skillsData = [
    {
      category: t('category.languages'),
      skills: [
        { name: 'L1', icon: FiMoon },
        { name: 'L2', icon: FiSun },
        { name: 'L3', icon: FiPhone },
        { name: 'L4', icon: FiMail },
        { name: 'L5', icon: FiMoon },
        { name: 'L6', icon: FiMoon },
        { name: 'L7', icon: FiSun },
      ],
    },
    {
      category: t('category.frameworks'),
      skills: [
        { name: 'f1', icon: FiMoon },
        { name: 'f2', icon: FiSun },
        { name: 'f3', icon: FiSun },
      ],
    },
    {
      category: t('category.databases'),
      skills: [
        { name: 'd1', icon: FiMoon },
        { name: 'd2', icon: FiMoon },
        { name: 'd3', icon: FiSun },
        { name: 'd4', icon: FiMoon },
        { name: 'D5', icon: FiMoon },
      ],
    },
  ];

  return (
    <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillsData.map((category, idx) => (
        <SkillsCategory
          key={idx}
          category={category.category}
          skills={category.skills}
        />
      ))}
    </div>
  );
}

export default SkillsSection;
