"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  position: string;
  image?: string;
  relation: string;
  date: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: "Ravi Garg",
    name: "Ravi Garg",
    position: "SDE at London Based MNC",
    relation: "Mentor",
    date: "Jan 1, 2025",
    quote: "Sunny has consistently demonstrated a strong work ethic, technical proficiency, and exceptional leadership skills throughout his tenure. As a student council member, Sunny played a pivotal role in organizing and executing various student events."
  },
  {
    id: "santosh",
    name: "Santosh Upadhyay",
    position: "Associate Professor at AKGEC",
    relation: "Manager",
    date: "March 20, 2025",
    quote: "I am pleased to recommend Sunny for his exceptional technical and leadership skills. As a Technical Executive, he oversaw technical operations using advanced methodologies to achieve project milestones and foster innovation."
  },
  {
    id: "Pankaj Verma",
    name: "Pankaj Verma",
    position: "Ex-SDE at Snapchat",
    relation: "Mentor",
    date: "Feb 15, 2025",
    quote: "Sunny is a highly skilled and dedicated developer with a strong passion for technology. He consistently delivers high-quality work and is always willing to go the extra mile to ensure project success."
  },
  {
    id: "Sahil",
    name: "Sahil",
    position: "Product Manager at To the new",
    relation: "Mentor",
    date: "April 10, 2025",
    quote: "Working with Sunny has been a fantastic experience. His ability to understand complex requirements and translate them into effective solutions is impressive. He is a great team player and always brings positive energy to the team."
  },
  {
    id: "Shashank Sahu",
    name: "Shashank Sahu",
    position: "MERN Stack Developer at The Heion Group",
    relation: "Colleague",
    date: "May 5, 2025",
    quote: "Sunny is an exceptional developer with a keen eye for detail. His problem-solving skills and ability to work under pressure make him a valuable asset to any team. I highly recommend him for any development role."
  }
];

export function Testimonials() {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">      
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Recommendations
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            What mentors and colleagues say about my work
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  
                  <p className="italic text-muted-foreground mb-6">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.relation} • {testimonial.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}