"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { experiences } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Work Experience
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My professional journey and work experience
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl mt-12">
          <div className="relative mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 h-full w-[2px] -translate-x-1/2 bg-border" />

            {/* Timeline Items */}
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-12 flex flex-col md:flex-row"
              >
                {/* Timeline Circle */}
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary h-5 w-5 rounded-full border-4 border-background" />

                {/* Content Card */}
                <div className={`mx-5 md:w-1/2 ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-muted/50 p-4">
                      <CardTitle className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold">{experience.title}</h3>
                          <p className="text-sm text-muted-foreground">{experience.company}</p>
                        </div>
                        <Badge variant="outline" className="ml-auto">
                          {experience.startDate} - {experience.endDate}
                        </Badge>
                      </CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground mt-2">
                        <MapPin className="mr-1 h-4 w-4" />
                        {experience.location}
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p className="mb-4">{experience.description}</p>
                      <Separator className="my-4" />
                      <h4 className="font-medium mb-2">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <ArrowRight className="mr-2 h-4 w-4 text-primary mt-1 shrink-0" />
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}