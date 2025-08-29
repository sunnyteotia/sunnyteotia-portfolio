// data/experience.ts
export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    achievements: string[];
    type?: 'work' | 'research' | 'education' | 'leadership';
  }
  
  export const experiences: Experience[] = [
    // Regular job positions
    {
      id: "full-stack-dev",
      title: "Full Stack Web Developer",
      company: "ISKCON GHAZIABAD",
      location: "Ghaziabad, India",
      startDate: "January 2025",
      endDate: "October 2025",
      description: "Designed and implemented a web portal for Udgaar and Umang Festival",
      achievements: [
        "Developed a full-stack web portal using Next.js,React.js, Node.js, and MongoDB for 15000+ registrations and 1000+ prezchers management",
        "Enabled task tracking, document sharing, and access control to streamline collaboration",
        "Optimized and enhanced UI/UX, reducing page load time and improving responsiveness across devices",
      ],
      type: 'work'
    },
     {
      id: "Secretary",
      title: "IYF Secretary",
      company: "ISKCON GHAZIABAD",
      location: "Ghaziabad, India",
      startDate: "January 2023",
      endDate: "Present",
      description: "Coordinated and implemented a many projects,festivals,classes and camps for Youth of Ghaziabad",
      achievements: [
        "Guiding more than 100 youths in their personal, spiritual, and professional growth",
        "Organized and managed 3+ big festivals and several camps with 300+ participants",
        "Led a team of 20 volunteers to successfully execute events and initiatives",
      ],
      type: 'leadership'
    },

  ];