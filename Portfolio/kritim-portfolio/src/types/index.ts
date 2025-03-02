// src/types/index.ts
export interface Project {
  name: string;
  desc: string;
  tech: string;
  link: string;
}

export interface Skill {
  name: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  achievements: string[];
}
