import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import type { ComponentType } from 'react';
import { useLanguage } from '../hooks/useLanguage';

type Skill = {
  name: string;
  icon: ComponentType<{ className?: string }>;
};

type CategoryProps = {
  category: string;
  skills: Skill[];
};

export function SkillsCategory({ category, skills }: CategoryProps) {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedSkills = isExpanded ? skills : skills.slice(0, 5);
  const hasMore = skills.length > 5;
  const Icon = isExpanded ? FaChevronUp : FaChevronDown;

  return (
    <div className="bg-primary border-accent shadow-sm flex flex-col gap-6 rounded-xl border">
      <div className="px-6 pt-6">
        <h2 className="text-center">{category}</h2>
      </div>
      <div className="px-6 pb-6 space-y-2">
        {displayedSkills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all bg-component text-text-primary"
            >
              <IconComponent className="icon-decoration" aria-hidden="true" />
              <span className="text-sm">{skill.name}</span>
            </div>
          );
        })}
        {hasMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="icon-btn"
            aria-label={
              isExpanded
                ? t('aria-label.showLessSkills')
                : t('aria-label.showMoreSkills')
            }
          >
            <Icon className="icon-action" />
          </button>
        )}
      </div>
    </div>
  );
}
