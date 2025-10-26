"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"

const companies = [
  {
    name: "블루프로그",
    position: "웹 프론트엔드",
    period: "2021.07 ~"
  }
]

const experiences = [
  {
    company: "블루프로그",
    projects: [
      {
        title: "trepick",
        period: "2021.12 ~",
        description: "온라인 행사 제작 및 운영 플랫폼",
        skills: ["Next.js", "TypeScript", "Styled-components"],
        achievements: [
          "이벤트 페이지 제작 및 운영",
          "리소스 최적화",
          "컨텐츠 공유를 위한 동적 오픈그래프 적용",
          "GTM 연동 및 사용자 데이터 추적",
          "전역 상태 관리 및 데이터 저장 기능 구현",
        ],
      },
      {
        title: "소속비즈니스",
        period: "2022.12 ~",
        description: "매장 관리 및 이용량 관리 플랫폼",
        skills: ["Next.js", "TypeScript", "Tailwind", "Shadcn/UI"],
        achievements: [
          "알림 메시지 기능 구현",
          "사용자 접속 브라우저에 따라 기능 동작 및 페이지 구분",
          "결제 시스템 연동",
          "데이터 시각화 및 대시보드 구현",
          "오류 발생 시 로그 기능 추가",
        ],
      },
      {
        title: "소속",
        period: "2025.02 ~",
        description: "오프라인 할인 멤버십 플랫폼",
        skills: ["React-Native", "Next.js", "TypeScript", "Tailwind", "Shadcn/UI"],
        achievements: [
          "Flutter 기반의 앱을 React-Native, 웹 애플리케이션으로 전환",
          "QR 코드 인식 기능 구현",
          "무한 스크롤 기능 구현",
          "웹·앱간 데이터 송수신 기능 구현"
        ],
      },
      {
        title: "소속인사이트",
        period: "2023.09 ~",
        description: "서비스 이용량 데이터 시각화 및 대시보드",
        skills: ["AWS", "Python", "MySQL", "Docker"],
        achievements: [],
      }
    ]
  }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">경력</h2>

          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="text-2xl md:text-3xl font-bold">{company.name}</h3>
                  <span className="text-sm text-muted-foreground mt-2 md:mt-0">{company.period}</span>
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
                        <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors duration-300">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <h3 className="text-primary text-xl font-bold">{project.title}</h3>
                            <span className="text-sm text-muted-foreground mt-2 md:mt-0">{project.period}</span>
                          </div>
        
                          <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.skills.map((skill, i) => (
                              <span key={i} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                                {skill}
                              </span>
                            ))}
                          </div>
        
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
