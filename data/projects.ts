export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}
export const projects: Project[] = [
  {
    id: "Udgaar",
    title: "Udgaar",
    description: "An Event Management System for ISKCON's Mega Anti-Addiction Youth Festival ",
    longDescription: "Developed a comprehensive event management system for ISKCON's Udgaar Festival, facilitating seamless registration, leader management, and payment processing for over 15,000 participants.The platform features role-based access control, real-time analytics, and a user-friendly interface to enhance event coordination and participant engagement.",
    technologies: ["Reactjs", "Nodejs","Next.js", "TypeScript", "TailwindCSS","Mongo DB","Express", "Razorpay", "JWT"],
    achievements: [
      "Built for 1000+ Leaders Management and 15000+ users Registrations",
      "Enabled 10000+ transactions and 30% faster monetization via Polygon",
      "Implemented role-based access and beautiful landing Page to increase user involvement",
      "Implemented a comprehensive analytics dashboard for real-time event tracking and 50+ APIs are involved"
    ],
    image: "/images/projects/udgaar/udgaar.png",
    github: "https://github.com/ConnectToKrsna/Udgaar-Frontend",
    liveUrl: "https://udgaar.in",
    featured: true
  },
  {
    id: "Umang",
    title: "Umang ",
   description: "An event management platform for Umang festival, streamlining registrations, attendance, and payments.",
longDescription: "Developed a full-stack event management platform for Umang festival, securing 300+ registrations. Built an admin dashboard with QR-based attendance tracking, managed both offline and online registrations, and integrated Razorpay for seamless payments. Designed a beautiful landing page to enhance participant engagement and provide smooth navigation.",
technologies: ["Next.js", "React", "Node.js", "Express", "MongoDB", "JWT Authentication", "TailwindCSS", "Razorpay"],
achievements: [
  "Secured 300+ registrations for the Umang festival",
  "Built admin dashboard with QR code scanning for attendance",
  "Managed both online and offline registrations seamlessly",
  "Integrated Razorpay payment gateway for hassle-free transactions",
  "Designed an attractive landing page to improve user experience"
],

    image: "/images/projects/Umang/Umang.png",
    github: "https://github.com/ConnectToKrsna/Umang-Festival-2025",
    liveUrl: "https://umang.iyfghaziabad.in",
    featured: true
  },
  {
     id: "Job-Portal",
    title: "Job Portal",
        description: "Developed a Job Portal platform connecting students with employers, facilitating seamless job applications and recruitment.",
longDescription: "Built a full-stack Job Portal to streamline recruitment and student opportunities. Implemented secure authentication, role-based dashboards for admins, recruiters, and candidates. Added job posting, application tracking, and profile management features, ensuring scalability and smooth user experience.",
technologies: ["Next.js", "React", "Node.js", "Express", "Mongo DB", "JWT Authentication", "TailwindCSS", "Redux"],
achievements: [
  "Enabled recruiters to post and manage jobs with real-time applicant tracking",
  "Built student dashboard for profile creation and job applications",
  "Implemented admin panel for managing users and job listings",
],
   image: "/images/projects/Job-Portal/Job-Portal.png",
    github: "https://github.com/sunnyteotia/job-portal",
    liveUrl: "https://jobify-opal-chi.vercel.app/",
    featured: true
  },
];