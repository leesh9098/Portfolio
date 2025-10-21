"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description:
      "Leading frontend development for enterprise applications, mentoring junior developers, and implementing best practices.",
    achievements: [
      "Improved application performance by 40%",
      "Led migration to Next.js 14",
      "Established component library used across 5 products",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Co.",
    period: "2020 - 2022",
    description:
      "Developed responsive web applications and collaborated with design teams to create exceptional user experiences.",
    achievements: [
      "Built 15+ client projects from scratch",
      "Implemented automated testing reducing bugs by 60%",
      "Contributed to open-source projects",
    ],
  },
  {
    title: "Junior Developer",
    company: "StartUp Labs",
    period: "2018 - 2020",
    description:
      "Started my professional journey building features for various web applications and learning modern development practices.",
    achievements: [
      "Developed key features for main product",
      "Participated in code reviews and pair programming",
      "Learned React, TypeScript, and modern tooling",
    ],
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 lg:py-32 px-4 bg-secondary/30" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Work Experience</h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 md:mt-0">{exp.period}</span>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                      >
                        <span className="text-primary mr-2">▹</span>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
