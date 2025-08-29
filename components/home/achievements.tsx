"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, Code, Cpu, Gamepad, Zap, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Achievement {
  icon: React.ReactNode;
  title: string;
  colorClass: string;
}

const achievements: Achievement[] = [
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "Technical Executive for Viplava Fest, Ghaziabad",
    colorClass: "text-yellow-600 dark:text-yellow-400",
  },
  {
    icon: <Medal className="h-6 w-6" />,
    title: "Best Facilitator Award at Viplava Fest 2024",
    colorClass: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Best Academics Award at Viplava Fest 2023",
    colorClass: "text-green-600 dark:text-green-400",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Solved 300+ DSA Problems on LeetCode & GFG",
    colorClass: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "Built 5+ Full-Stack Projects using MERN Stack",
    colorClass: "text-red-600 dark:text-red-400",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Coordinated 3+ Big Festivals and several camps with 300+ Participants",
    colorClass: "text-indigo-600 dark:text-indigo-400",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Monthly 10+ Lectures on Leadership ",
    colorClass: "text-teal-600 dark:text-teal-400",
  },
];

export function Achievements() {
  return (
    <section className="py-12 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Achievements
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Recognition and milestones from my technical journey
          </p>
        </motion.div>
        
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring", 
                stiffness: 100,
                damping: 15
              }}
              className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)]"
            >
              <Card className="h-full border-2 hover:border-primary transition-all duration-300">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className={`${achievement.colorClass} shrink-0`}>
                    {achievement.icon}
                  </div>
                  <div className="text-left">
                    <p className="font-medium">{achievement.title}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 inline-flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="text-sm py-1.5 px-3">Technical Leadership</Badge>
          <Badge variant="secondary" className="text-sm py-1.5 px-3">Youth Facilitator</Badge>
          <Badge variant="secondary" className="text-sm py-1.5 px-3">Manager</Badge>
          <Badge variant="secondary" className="text-sm py-1.5 px-3">Mentor</Badge>
        </div>
      </div>
    </section>
  );
}