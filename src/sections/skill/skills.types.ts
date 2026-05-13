import type { ComponentType } from 'react';

export type Skill = {
  name: string;
  icon: ComponentType<{ className?: string }>;
};

export type Category = {
  category: string;
  skills: Skill[];
};
