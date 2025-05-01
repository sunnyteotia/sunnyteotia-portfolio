export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    technologies: string[];
    achievements: string[];
    image?: string;
    github?: string;
    liveUrl?: string;
    featured: boolean;
  }
  
  export const projects: Project[] = [
    {
      id: "zenith",
      title: "Zenith",
      description: "A decentralized music application enabling artists to mint and sell their music as NFTs.",
      longDescription: "Developed a decentralized music platform for artists to mint and sell NFTs with Solidity and IPFS, enabling transactions and faster monetization via Polygon. Implemented role-based access and interactive features like community hubs, increasing session duration substantially.",
      technologies: ["Next.js", "Tailwind CSS", "Solidity", "Polygon", "IPFS", "Smart Contracts", "Web3"],
      achievements: [
        "Built for 150+ artists to mint and sell NFTs with Solidity and IPFS",
        "Enabled 300+ transactions and 30% faster monetization via Polygon",
        "Implemented role-based access and interactive features like community hubs, increasing session duration by 65%",
        "Eliminated third-party dependencies and automated royalty payouts, reducing overhead and platform latency by 30%"
      ],
      github: "https://github.com/achyut21/zenith",
      featured: true
    },
    {
      id: "pokearena",
      title: "PokeArena",
      description: "A blockchain-based platform digitizing Pokémon cards as NFTs with secure trading and battling features.",
      longDescription: "Developed a blockchain-based platform digitizing 300+ Pokémon cards as NFTs, enabling secure trading and battling with on-chain verified ownership and battle logic. Integrated Aptos wallet authentication for seamless trades with real-time feedback.",
      technologies: ["React.js", "Node.js", "Tailwind CSS", "Three.js", "Web3", "Move", "Blockchain"],
      achievements: [
        "Developed a blockchain-based platform digitizing 300+ Pokémon cards as NFTs",
        "Enabled secure trading and battling with on-chain verified ownership and battle logic",
        "Integrated Aptos wallet authentication to ease 120+ NFT trades with real-time feedback",
        "Crafted a pixel art-inspired UI/UX using Tailwind CSS and Three.js, improving user engagement by 60%"
      ],
      github: "https://github.com/achyut21/pokearena",
      featured: true
    },
    {
      id: "byteroot",
      title: "Byteroot",
      description: "A coding ecosystem enabling users to post AI-validated questions and collaborate on solutions.",
      longDescription: "Revolutionized the coding ecosystem by developing ByteRoot, enabling users to post AI-validated questions and create an ecosystem to solve those questions and have group discussions. Seamlessly integrated Piston API to fetch compiler outputs.",
      technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Tailwind", "OpenAI"],
      achievements: [
        "Created a platform for posting AI-validated coding questions",
        "Built an ecosystem for collaborative problem-solving and group discussions",
        "Integrated Piston API for compiler outputs, enhancing code execution by 40%"
      ],
      github: "https://github.com/achyut21/byteroot",
      featured: true
    },
    {
      id: "infinitus",
      title: "Infinitus'24",
      description: "Led the development of the Infinitus Fest website, attracting 20,000 students with 6,000 registrations.",
      longDescription: "Led the development of the Infinitus Fest website, attracting 20,000 students with 6,000 registrations across 10 events, optimizing for crowd loading. Integrated payment gateway for Cultural and Technical events.",
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "Three.js"],
      achievements: [
        "Attracted 20,000 students with 6,000 registrations across 10 events",
        "Emphasized crowd loading optimization for seamless user experience",
        "Integrated payment gateway for Cultural and Technical events"
      ],
      github: "https://github.com/achyut21/infinitus24",
      featured: false
    }
  ];