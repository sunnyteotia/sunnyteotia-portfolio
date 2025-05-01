export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    achievements: string[];
  }
  
  export const experiences: Experience[] = [
    {
      id: "full-stack-dev",
      title: "Full Stack Web Developer",
      company: "SRM University - AP",
      location: "Vijayawada, India",
      startDate: "January 2024",
      endDate: "June 2024",
      description: "Designed and implemented a web portal for faculty-student collaboration in UROP and Capstone projects.",
      achievements: [
        "Developed a full-stack web portal using React.js, Node.js, and MongoDB for 3000+ UROP/Capstone students",
        "Enabled task tracking, document sharing, and access control to streamline collaboration",
        "Optimized and enhanced UI/UX, reducing page load time by 60% and improving responsiveness across devices",
        "Achieved 75% grading accuracy improvement and 50% evaluation efficiency boost through workflow automation"
      ]
    },
    {
      id: "tech-intern",
      title: "Technical Intern",
      company: "SRM University - AP",
      location: "Vijayawada, India",
      startDate: "October 2023",
      endDate: "June 2024",
      description: "Directed technical operations for university events, encompassing website development and promotional materials.",
      achievements: [
        "Orchestrated technical operations for 30+ university events, designing and deploying websites with integrated payment gateways",
        "Increased event participation by 25% through effective technical solutions",
        "Engineered dashboards and automated flows, increasing user satisfaction by 75% and cutting coordination time by 60%",
        "Ensured smooth execution through cross-functional collaboration, achieving 95% client satisfaction"
      ]
    }
  ];