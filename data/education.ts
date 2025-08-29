export interface Education {
    id: string;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    description?: string;
  }
  
  export const education: Education[] = [
    {
      id: "North",
      degree: "B.Tech in Computer Science (Expected)",
      institution: "Ajay Kumar Garg Engineering College",
      location: "Ghaziabad, Uttar Pradesh, India",
      startDate: "November 2022",
      endDate: "June 2026"
    },
  ];