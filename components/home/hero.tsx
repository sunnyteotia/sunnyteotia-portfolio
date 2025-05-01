"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { socialLinks } from "@/data/social";
import { skills } from "@/data/skills";

export function Hero() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const displayedSkills = [
    "Full Stack Developer",
    "Web3 Enthusiast",
    "Machine Learning Practitioner",
    "UI/UX Designer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % displayedSkills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I&apos;m Achyut Katiyar
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="h-12"
              >
                <div className="relative overflow-hidden h-full flex items-center">
                  {displayedSkills.map((skill, index) => (
                    <div
                      key={skill}
                      className={`absolute transition-all duration-500 transform ${
                        index === currentSkillIndex
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-0"
                      }`}
                    >
                      <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
                        {skill}
                      </h2>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-[600px] text-muted-foreground md:text-xl"
              >
                A passionate developer with expertise in Next.js, React, Tailwind CSS,
                and blockchain technologies. Currently pursuing a Master&apos;s in Computer Science
                at Northeastern University.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <Button asChild size="lg" className="group">
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-full border bg-muted">
              <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-full">
                    <Image
                        src="/images/profile.jpg"
                        alt="Achyut Katiyar"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 400px"
                    />
                </div>
              <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-transparent via-blue-300/10 to-transparent animate-[shimmer_2s_infinite]"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}