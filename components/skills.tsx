"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        src: "/react.webp"
      },
      {
        name: "Next.js",
        src: "/nextjs.webp"
      },
      {
        name: "TypeScript",
        src: "/typescript.webp"
      },
      {
        name: "Tailwind CSS",
        src: "/tailwindcss.webp"
      }
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        src: "/nodejs.webp"
      },
      {
        name: "MySQL",
        src: "/mysql.webp"
      }
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      {
        name: "Git",
        src: "/git.webp"
      },
      {
        name: "Docker",
        src: "/docker.webp"
      },
      {
        name: "AWS",
        src: "/aws.webp"
      },
      {
        name: "Firebase",
        src: "/firebase.webp"
      }
    ]
  }
]

export function Skills({
  ref,
  isInView
}: {
  ref: React.RefObject<HTMLDivElement | null>
  isInView: boolean
}) {
  return (
    <section id="skills" className="py-20 lg:py-32 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                <Card className="p-6 bg-card border-border h-full hover:border-primary/50 transition-colors duration-300">
                  <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="flex items-center gap-x-2 px-3 py-1 bg-slate-800 text-secondary-foreground rounded-full text-sm"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Image
                          src={skill.src}
                          alt={skill.name}
                          width={16}
                          height={16}
                          priority
                        />
                        {skill.name}
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
