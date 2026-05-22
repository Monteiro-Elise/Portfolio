import { useMemo } from 'react';

import InViewReveal from '../../components/InViewReveal';
import { useLanguage } from '../../hooks/useLanguage';
import { getSkillsData } from './skills.data';
import SkillsCategory from './SkillsCategory';

export default function SkillsSection() {
  const { t } = useLanguage();

  const skillsData = useMemo(() => getSkillsData(t), [t]);

  return (
    <ul className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillsData.map((category, index) => (
        <li key={index}>
          <InViewReveal delay={300}>
            <SkillsCategory
              category={category.category}
              skills={category.skills}
            />
          </InViewReveal>
        </li>
      ))}
    </ul>
  );
}
