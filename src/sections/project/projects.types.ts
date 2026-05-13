export type Project = {
  id: string;
  isVideo: boolean;
  media: string;
  mediaDescription: string;
  title: string;
  description: string;
  features: string[];
  skills: string[];
  githubLink?: string;
  demoLink?: string;
};
