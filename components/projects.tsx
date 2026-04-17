"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "그리움 이음",
    period: "2025.11 ~ 진행 중",
    description: "온라인 추모 및 가족 그룹 관리 서비스",
    members: "Frontend: 2명, Backend: 1명",
    position: "Lead Frontend Developer",
    image: "/sample_geulium_ieum.webp",
    tags: ["React Router (Remix)", "TypeScript", "Tailwind", "Shadcn/UI"],
    github: "https://github.com/geulium-ieum/vite-geulium-ieum"
  },
  {
    title: "Carog",
    period: "2025.06 ~ 2025.09",
    description: "차량 유지 비용을 관리하는 웹 애플리케이션",
    members: "Frontend: 2명, Backend: 1명",
    position: "PM, Lead Frontend Developer",
    image: "/sample_carog_video.gif",
    tags: ["React", "vite", "TypeScript", "Tailwind", "Shadcn/UI"],
    github: "https://github.com/leesh9098/Carog",
    demo: "https://carog.vercel.app",
  },
  {
    title: "PlanVerse",
    period: "2024.12 ~ 2025.05",
    description: "업무 ⋅ 프로젝트의 효율적인 관리를 위한 웹 애플리케이션",
    members: "Frontend: 2명, Backend: 1명",
    position: "Lead Frontend Developer",
    image: "/sample_planverse.webp",
    tags: ["Next.js", "TypeScript", "Tailwind", "Shadcn/UI"],
    github: "https://gitlab.com/planverse/ui/planverse-ui"
  }
]

export function Projects({
  ref,
  isInView
}: {
  ref: React.RefObject<HTMLDivElement | null>
  isInView: boolean
}) {
  return (
    <section id="side-projects" className="flex justify-center items-center py-20 lg:py-32 px-4 min-h-screen bg-slate-800/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Side Projects</h2>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="md:flex-row-reverse gap-0 h-full py-0 overflow-hidden bg-card border-border group hover:border-primary/50 transition-all duration-300">
                  <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-120 relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="size-full object-top object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="flex flex-col gap-6 justify-center w-full md:w-1/2 md:h-full p-6">
                    <div>
                      <h3 className="text-primary text-xl md:text-2xl font-bold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{project.period}</p>
                    </div>
                    <p className="text-muted-foreground md:text-lg leading-relaxed">{project.description}</p>
                    <div>
                      <p className="font-semibold">인원 및 역할</p>
                      <ul className="">
                        <li className="leading-7">
                          <span className="text-primary mr-2">▹</span>
                          <span className="leading-relaxed">{project.members}</span>
                        </li>
                        <li className="leading-7">
                          <span className="text-primary mr-2">▹</span>
                          <span className="leading-relaxed">{project.position}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
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
