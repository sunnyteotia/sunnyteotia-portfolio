export interface SocialLink {
    id: string;
    name: string;
    url: string;
    icon: string;
  }
  
  export const socialLinks: SocialLink[] = [
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/sunnyteotia",
      icon: "github"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sunny-teotia-a72b272a3/",
      icon: "linkedin"
    },
    {
      id: "email",
      name: "Email",
      url: "mailto:sunnyteotia2005@gmail.com",
      icon: "mail"
    },
    {
      id: "phone",
      name: "Phone",
      url: "tel:+919058734868",
      icon: "phone"
    }
  ];