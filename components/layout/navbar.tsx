"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeSwitch } from "@/components/theme-switch";
import { socialLinks } from "@/data/social";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Experience", href: "/experience" },
  { title: "Projects", href: "/projects" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction and toggle navbar visibility
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up or at top
      }
      
      // Update scroll state for shadows and backdrop
      setIsScrolled(currentScrollY > 20);
      
      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    // Set initial state
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Update active section based on URL
  useEffect(() => {
    const pathname = window.location.pathname;
    setActiveSection(pathname);
  }, []);

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

  // Navbar container variants for animations
  const navbarVariants = {
    hidden: { 
      y: -100,
      opacity: 0 
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1
      }
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  // Navbar link item variants for animations
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          variants={navbarVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={cn(
            "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 transition-all duration-300 rounded-xl py-3 px-4",
            isScrolled 
              ? "bg-background/85 backdrop-blur-md border shadow-lg" 
              : "bg-background/50 backdrop-blur-sm border"
          )}
        >
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="font-display text-xl font-bold transition-colors hover:text-primary"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Achyut Katiyar
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium transition-all hover:text-primary hover:bg-muted/50",
                      activeSection === item.href
                        ? "text-primary bg-muted/60"
                        : "text-muted-foreground"
                    )}
                    onClick={() => setActiveSection(item.href)}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                className="ml-1"
              >
                <ThemeSwitch />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="ml-2 flex gap-2"
              >
                {socialLinks.map((social, i) => (
                  <motion.div
                    key={social.id}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + i * 0.1, duration: 0.3 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="rounded-full bg-muted/50 hover:bg-primary/10"
                    >
                      <a 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={social.name}
                      >
                        {getIconComponent(social.icon)}
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </nav>

            {/* Mobile Navigation */}
            <Sheet>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="md:hidden flex items-center gap-2"
              >
                <ThemeSwitch />
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full bg-muted/50">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
              </motion.div>
              <SheetContent side="right" className="p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6">
                    <Link 
                      href="/"
                      className="font-display text-2xl font-bold transition-colors hover:text-primary"
                    >
                      Achyut Katiyar
                    </Link>
                  </div>
                  <div className="flex-1 px-6 py-8">
                    <ul className="flex flex-col gap-1">
                      {navItems.map((item, i) => (
                        <motion.li 
                          key={item.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i, duration: 0.3 }}
                        >
                          <Link
                            href={item.href}
                            className={cn(
                              "block py-3 px-4 text-lg font-medium rounded-md transition-colors",
                              activeSection === item.href
                                ? "text-primary bg-muted/60"
                                : "text-muted-foreground hover:text-primary hover:bg-muted/30"
                            )}
                            onClick={() => setActiveSection(item.href)}
                          >
                            {item.title}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-6 py-8 border-t">
                    <div className="flex gap-4 justify-center">
                      {socialLinks.map((social) => (
                        <Button
                          key={social.id}
                          variant="ghost"
                          size="icon"
                          asChild
                          className="rounded-full"
                        >
                          <a 
                            href={social.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label={social.name}
                          >
                            {getIconComponent(social.icon)}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}