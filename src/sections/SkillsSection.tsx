import { useMemo } from 'react';

import { SkillsCategory } from '../components/SkillsCategory';
import { useLanguage } from '../hooks/useLanguage';
import { getSkillsData } from './SkillsData';

function SkillsSection() {
  const { t } = useLanguage();

  const skillsData = useMemo(() => getSkillsData(t), [t]);

  return (
    <ul className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillsData.map((category, index) => (
        <li key={index}>
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
