// data/skills.ts
export type SkillCategory = 
  | 'Languages' 
  | 'Frameworks/Libraries' 
  | 'Cloud/DevOps' 
  | 'Concepts';

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string; // Used to generate the CDN URL
}

export const skills: Record<SkillCategory, Skill[]> = {
  'Languages': [
    { name: 'C++', category: 'Languages', logoKey: 'cplusplus' },
    { name: 'Java', category: 'Languages', logoKey: 'java' },
    { name: 'Python', category: 'Languages', logoKey: 'python' },
    { name: 'JavaScript', category: 'Languages', logoKey: 'javascript' },
    { name: 'TypeScript', category: 'Languages', logoKey: 'typescript' },
    { name: 'SQL', category: 'Languages', logoKey: 'mysql' },
  ],
  'Frameworks/Libraries': [
    { name: 'React.js', category: 'Frameworks/Libraries', logoKey: 'react' },
    { name: 'Node.js', category: 'Frameworks/Libraries', logoKey: 'nodejs' },
    { name: 'Next.js', category: 'Frameworks/Libraries', logoKey: 'nextjs' },
    { name: 'Express.js', category: 'Frameworks/Libraries', logoKey: 'express' },
    { name: 'Tailwind CSS', category: 'Frameworks/Libraries', logoKey: 'tailwindcss' },
  ],
  'Cloud/DevOps': [
    { name: 'Docker', category: 'Cloud/DevOps', logoKey: 'docker' },
    { name: 'MongoDB', category: 'Cloud/DevOps', logoKey: 'mongodb' },
    { name: 'PostgreSQL', category: 'Cloud/DevOps', logoKey: 'postgresql' },
  ],
  'Concepts': [
    { name: 'Data Structures & Algorithms', category: 'Concepts', logoKey: 'github' },
    { name: 'API Design', category: 'Concepts', logoKey: 'swagger' },
  ],
};

// Helper functions
export const getAllSkills = () => {
  return Object.values(skills).flat();
};

export const getCategories = () => {
  return Object.keys(skills) as SkillCategory[];
};