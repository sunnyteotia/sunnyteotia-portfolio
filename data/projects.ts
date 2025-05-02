export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    technologies: string[];
    achievements: string[];
    image: string; // Make this required now that we have images
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
      image: "/images/projects/zenith/zenith.jpg", // Path to your image
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
      image: "/images/projects/pokearena/pokearena.jpg", // Path to your image
      github: "https://github.com/achyut21/pokearena",
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
        image: "/images/projects/infinitus/infinitus.jpg", // Path to your image
        github: "https://github.com/achyut21/infinitus24",
        featured: false
      },
      {
        id: "lightning-time",
        title: "Lightning Time",
        description: "A secure timestamping protocol based on Bitcoin that prevents timestamp forgery and enhances security.",
        longDescription: "Developed Lightning Time, a secure timestamping protocol leveraging the Bitcoin Lightning Network. The solution prevents timestamp forgery by anchoring timestamps to the Bitcoin blockchain, providing cryptographic proof of existence at a specific point in time with enhanced security and non-repudiation properties.",
        technologies: ["Bitcoin", "Lightning Network", "Cryptography", "Node.js", "React", "WebSockets"],
        achievements: [
          "Created a novel security protocol for tamper-proof timestamping using Bitcoin's Lightning Network",
          "Implemented end-to-end encryption ensuring data integrity and non-repudiation for critical timestamp data",
          "Developed a scalable architecture capable of handling thousands of timestamp verifications per second",
          "Built a user-friendly interface for easy verification of timestamp authenticity"
        ],
        image: "/images/projects/lightning-time/lightning-time.jpg",
        github: "https://github.com/achyut21/lightning-time",
        liveUrl: "https://devpost.com/software/lightning-time",
        featured: true
      },
      {
        id: "billrewards",
        title: "BillRewards",
        description: "A cashback reward system that incentivizes on-time bill payments with cryptocurrency rewards.",
        longDescription: "Built BillRewards, an innovative system that encourages timely bill payments by rewarding users with cryptocurrency tokens. The platform integrates with payment processors to track bill payments and automatically distributes rewards for on-time payments, helping service providers reduce late payments while offering users tangible benefits.",
        technologies: ["Ethereum", "Solidity", "React.js", "Node.js", "Smart Contracts", "Web3.js"],
        achievements: [
          "Developed a smart contract-based reward system integrated with multiple payment processors",
          "Created a token distribution mechanism that automatically rewards on-time payments",
          "Implemented an analytics dashboard for tracking payment patterns and reward distributions",
          "Built a secure wallet integration system for claiming and managing reward tokens"
        ],
        image: "/images/projects/billrewards/billrewards.jpg",
        github: "https://github.com/achyut21/billrewards",
        liveUrl: "https://devpost.com/software/billrewards",
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
      image: "/images/projects/byteroot/byteroot.jpg", // Path to your image
      github: "https://github.com/achyut21/byteroot",
      featured: true
    }
  ];