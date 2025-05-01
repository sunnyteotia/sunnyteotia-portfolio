import Link from "next/link";
import { socialLinks } from "@/data/social";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  // Get icon component for social links
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <Github className="h-5 w-5" />;
      case "linkedin":
        return <Linkedin className="h-5 w-5" />;
      case "mail":
        return <Mail className="h-5 w-5" />;
      case "phone":
        return <Phone className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col gap-1">
            <Link href="/" className="text-lg font-bold">
              Achyut Katiyar
            </Link>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer & Machine Learning Enthusiast
            </p>
          </div>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.name}
              >
                {getIconComponent(social.icon)}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Achyut Katiyar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}