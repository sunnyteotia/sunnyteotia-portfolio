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
    type?: 'work' | 'research'; // Add type to distinguish work from research
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
      ],
      type: 'work'
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
      ],
      type: 'work'
    },
    {
      id: "ddos-detection",
      title: "DDoS Attack Detection using Deep Learning",
      company: "SRM University - AP",
      location: "Vijayawada, India",
      startDate: "March 2023",
      endDate: "May 2023",
      description: "Research under Dr. Sambit Kumar Mishra on detecting DDoS attacks in cloud environments using deep learning techniques.",
      achievements: [
        "Developed advanced anomaly detection algorithms, achieving an impressive 82% accuracy in threat detection",
        "Swiftly implemented countermeasures to thwart potential attacks, resulting in a 40% reduction in security breaches",
        "Applied deep learning models to identify patterns in network traffic for real-time detection of suspicious activities",
        "Created a scalable monitoring system to handle large volumes of cloud traffic with minimal false positives"
      ],
      type: 'research'
    },
    {
      id: "education-prediction",
      title: "Higher Education Prediction Algorithm",
      company: "SRM University - AP",
      location: "Vijayawada, India",
      startDate: "June 2022",
      endDate: "October 2022",
      description: "Research under Prof. T. Ragunathan on predicting student acceptance into Master's programs based on academic performance metrics.",
      achievements: [
        "Developed an AI ML model predicting student acceptance into Masters PG College with 78% accuracy",
        "Trained the model on diverse exam scores to suggest colleges based on proximity to students' IELTS, GRE, and TOEFL scores",
        "Led data acquisition and cleansing, ensuring dataset integrity with a 95% accuracy rate",
        "Optimized the algorithm for efficiency and reliability in making personalized education recommendations"
      ],
      type: 'research'
    }
  ];