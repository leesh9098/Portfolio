"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "Carog (2025.06 ~ 2025.09)",
    description: "차량 유지 비용을 관리하는 웹 애플리케이션",
    members: "Frontend: 2명, Backend: 1명",
    image: "/sample_carog.png",
    tags: ["React", "vite", "TypeScript", "Tailwind", "Shadcn/UI"],
    github: "https://github.com/leesh9098/Carog",
    demo: "https://carog.vercel.app",
  },
  {
    title: "PlanVerse (2024.12 ~ 2025.05)",
    description: "업무 및 프로젝트를 효율적으로 관리하기 위한 웹 애플리케이션",
    members: "Frontend: 2명, Backend: 1명",
    image: "/no-image.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind", "Shadcn/UI"],
    github: "https://gitlab.com/planverse/ui/planverse-ui"
  }
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 lg:py-32 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full py-0 overflow-hidden bg-card border-border group hover:border-primary/50 transition-all duration-300">
                  <div className="relative overflow-hidden aspect-video">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="size-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.members}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-slate-800 text-secondary-foreground rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Link>
                      </Button>
                      {project.demo && (
                        <Button size="sm" asChild>
                          <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </Link>
                        </Button>
                      )}
                    </div>
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
