"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "./ui/button"
import Link from "next/link"
import { LinkIcon } from "lucide-react"
import Image from "next/image"

const companies = [
  {
    name: "(주)블루프로그",
    position: "웹 프론트엔드",
    period: "2021.07 ~ 2026.02"
  }
]

const experiences = [
  {
    company: "(주)블루프로그",
    projects: [
      {
        title: "trepick",
        image: "/sample_trepick.webp",
        serviceLink: "https://trepick.com",
        period: "2021.12 ~ 2022.11",
        description: "온라인 행사 제작 및 운영 플랫폼",
        skills: ["Next.js", "TypeScript", "Styled-components"],
        achievements: [
          "유저 참여형 이벤트 페이지 제작"
        ],
      },
      {
        title: "소속비즈니스",
        image: "/sample_sosok_business.webp",
        serviceLink: "https://biz.sosok.so",
        period: "2022.12 ~ 2023.09",
        description: "매장 관리 및 이용량 관리 플랫폼",
        skills: ["Next.js", "TypeScript", "Tailwind", "Shadcn/UI"],
        achievements: [
          "데이터 시각화 및 대시보드/차트 구현"
        ],
      },
      {
        title: "소속",
        image: "/sample_sosok.webp",
        landingLink: "https://sosok.so",
        serviceLink: "https://app.sosok.so",
        period: "2025.02 ~ 2025.08",
        description: "오프라인 할인 멤버십 플랫폼",
        skills: ["React-Native", "Next.js", "TypeScript", "Tailwind", "Shadcn/UI"],
        achievements: [
          "Flutter → React-Native + WebView 마이그레이션"
        ],
      },
      // {
      //   title: "소속인사이트",
      //   period: "2023.09 ~",
      //   description: "서비스 이용량 데이터 시각화 및 대시보드",
      //   skills: ["AWS", "Python", "MySQL", "Docker"],
      //   achievements: [
      //     "Apache Superset 구축",
      //   ],
      // }
    ]
  }
]

export function Experience({
  ref,
  isInView
}: {
  ref: React.RefObject<HTMLDivElement | null>
  isInView: boolean
}) {
  return (
    <section id="experience" className="flex justify-center items-center min-h-screen py-20 lg:py-32 px-4" ref={ref}>
      <div className="w-full mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Experience
          </h2>

          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-4 md:p-6 bg-card border-border hover:border-primary/50 transition-colors duration-300">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">{company.name}</h3>
                  <p className="text-sm md:text-base text-muted-foreground mt-2">{company.period}</p>
                </div>
                {experiences.filter(experience => experience.company === company.name).map((experience, index) => (
                  <div
                    key={experience.company}
                    className="space-y-6"
                  >
                    {experience.projects.map((project, index) => (
                      <motion.div
                        key={project.title}
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                      >
                        <Card className="flex-col-reverse md:flex-row p-0 md:p-6 bg-card border-border group hover:border-primary/50 transition-all duration-300">
                          <div className="flex flex-col gap-6 md:flex-1 p-4 md:p-0">
                            <div>
                              <h3 className="text-primary text-xl font-bold">{project.title}</h3>
                              <p className="text-sm text-muted-foreground mt-2">{project.period}</p>
                            </div>
                            <p className="w-fit text-muted-foreground leading-relaxed">{project.description}</p>
                            {(project.landingLink || project.serviceLink) && (
                              <div className="flex flex-wrap gap-x-2">
                                {project.landingLink && (
                                  <Button
                                    variant="secondary"
                                    className="w-fit"
                                    asChild
                                  >
                                    <Link
                                      href={project.landingLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <LinkIcon size={16} />
                                      Landing Page
                                    </Link>
                                  </Button>
                                )}
                                {project.serviceLink && (
                                  <Button
                                    variant="secondary"
                                    className="w-fit"
                                    asChild
                                  >
                                    <Link
                                      href={project.serviceLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <LinkIcon size={16} />
                                      Service Page
                                    </Link>
                                  </Button>
                                )}
                              </div>
                            )}
          
                            {project.achievements.length > 0 && (
                              <ul className="space-y-2">
                                {project.achievements.map((achievement, i) => (
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
                            )}

                            <div className="flex flex-wrap gap-2">
                              {project.skills.map((skill, i) => (
                                <span key={i} className="px-2 py-1 bg-slate-800 text-secondary-foreground rounded text-xs">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="md:flex-1 relative overflow-hidden aspect-video">
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={0}
                              height={0}
                              sizes="100vw"
                              className="w-full size-full aspect-square object-top object-cover group-hover:scale-110 transition-transform duration-300"
                              priority
                            />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                ))}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
