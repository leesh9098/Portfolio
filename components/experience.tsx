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
          "이미지(jpg, png → webp) 및 동영상(mp4 → webm) 리소스 최적화로 용량 각각 30%, 20% 감소",
          "Lighthouse 성능·접근성·SEO·Best Practices 전 항목 100점 달성",
          "Next.js SSR을 활용한 동적 Open Graph 적용으로 SNS 공유 유입 최적화",
          "Google Analytics + Google Tag Manager 연동으로 유저 행동 데이터 수집 및 마케팅 성과 분석 지원"
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
          "TanStack Query 도입으로 불필요한 API 호출 약 40% 감소 및 UX 개선",
          "NextAuth 소셜 로그인 및 Firebase Auth 로그인 기능 구현",
          "Firebase Cloud Messaging을 사용한 푸시 알림 기능 구현",
          "토스페이먼츠 결제 모듈 연동",
          "Sentry 도입으로 오류 발생 원인 추적 및 이슈 대응 시간 1일 이내로 단축",
          "Web Socket을 활용한 실시간 채팅 기능 구현",
          "chart.js를 사용한 사용량 데이터 시각화 대시보드 구현",
          "AWS ECS + ECR 배포 환경 구축"
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
          "Flutter → React Native + WebView 마이그레이션으로 앱 용량 25% 감소",
          "웹 배포 방식 전환으로 앱 업데이트 소요 시간 2~3일 → 약 5분으로 단축",
          "Virtualized 도입으로 렌더링 시간 약 80% 이상, API 서버 부하 약 90% 이상 감소",
          "Branch.io를 활용한 동적 딥링크 기능 구현 (Firebase Dynamic Links 대체)",
          "기기 카메라를 활용한 QR 코드 스캔 기능 구현"
        ],
      },
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

          {companies.map((company) => (
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
                {experiences
                  .filter(experience => experience.company === company.name)
                  .map((experience) => (
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
                                <h3 className="text-primary text-xl md:text-2xl font-bold">{project.title}</h3>
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
                                      className="flex items-start"
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
                  ))
                }
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
