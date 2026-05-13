import { useMemo } from 'react';

import InViewReveal from '../../components/InViewReveal';
import { useLanguage } from '../../hooks/useLanguage';
import { useMobile } from '../../hooks/useMobile';
import { getSkillsData } from './skills.data';
import SkillsCategory from './SkillsCategory';

export default function SkillsSection() {
  const { t } = useLanguage();
  const isMobile = useMobile();

  const skillsData = useMemo(() => getSkillsData(t), [t]);

  return (
    <ul className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillsData.map((category, index) => (
        <InViewReveal
          key={index}
          delay={500 + (isMobile ? 0 : (index % 2) * 300)}
        >
          <li>
            <SkillsCategory
              category={category.category}
              skills={category.skills}
            />
          </li>
        </InViewReveal>
      ))}
    </ul>
  );
}
