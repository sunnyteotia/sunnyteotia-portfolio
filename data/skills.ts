export type SkillCategory = 'Languages' | 'Frameworks/Libraries' | 'ML/Data' | 'Blockchain/Web3' | 'Cloud/DevOps' | 'Concepts';

export interface Skill {
  name: string;
  category: SkillCategory;
  icon?: string;
}

export const skills: Record<SkillCategory, Skill[]> = {
  'Languages': [
    { name: 'C++', category: 'Languages' },
    { name: 'Java', category: 'Languages' },
    { name: 'Python', category: 'Languages' },
    { name: 'JavaScript', category: 'Languages' },
    { name: 'TypeScript', category: 'Languages' },
    { name: 'Dart', category: 'Languages' },
    { name: 'Kotlin', category: 'Languages' },
    { name: 'Solidity', category: 'Languages' },
    { name: 'SQL', category: 'Languages' }
  ],
  'Frameworks/Libraries': [
    { name: 'React.js', category: 'Frameworks/Libraries' },
    { name: 'Node.js', category: 'Frameworks/Libraries' },
    { name: 'Next.js', category: 'Frameworks/Libraries' },
    { name: 'Flask', category: 'Frameworks/Libraries' },
    { name: 'Express.js', category: 'Frameworks/Libraries' },
    { name: 'Tailwind CSS', category: 'Frameworks/Libraries' },
    { name: 'Android SDK', category: 'Frameworks/Libraries' },
    { name: 'Three.js', category: 'Frameworks/Libraries' }
  ],
  'ML/Data': [
    { name: 'TensorFlow', category: 'ML/Data' },
    { name: 'PyTorch', category: 'ML/Data' },
    { name: 'Supervised Learning', category: 'ML/Data' },
    { name: 'Unsupervised Learning', category: 'ML/Data' },
    { name: 'Deep Learning', category: 'ML/Data' },
    { name: 'Neural Networks', category: 'ML/Data' }
  ],
  'Blockchain/Web3': [
    { name: 'Web3.js', category: 'Blockchain/Web3' },
    { name: 'Ethers.js', category: 'Blockchain/Web3' },
    { name: 'IPFS', category: 'Blockchain/Web3' },
    { name: 'Polygon', category: 'Blockchain/Web3' },
    { name: 'Ethereum', category: 'Blockchain/Web3' },
    { name: 'Aptos', category: 'Blockchain/Web3' },
    { name: 'Move', category: 'Blockchain/Web3' }
  ],
  'Cloud/DevOps': [
    { name: 'AWS (EC2, S3, Lambda)', category: 'Cloud/DevOps' },
    { name: 'GCP', category: 'Cloud/DevOps' },
    { name: 'Docker', category: 'Cloud/DevOps' },
    { name: 'Kubernetes', category: 'Cloud/DevOps' },
    { name: 'Jenkins', category: 'Cloud/DevOps' },
    { name: 'Firebase', category: 'Cloud/DevOps' },
    { name: 'MongoDB', category: 'Cloud/DevOps' }
  ],
  'Concepts': [
    { name: 'System Design', category: 'Concepts' },
    { name: 'Data Structures & Algorithms', category: 'Concepts' },
    { name: 'Distributed Systems', category: 'Concepts' },
    { name: 'API Design', category: 'Concepts' },
    { name: 'Smart Contracts', category: 'Concepts' }
  ]
};