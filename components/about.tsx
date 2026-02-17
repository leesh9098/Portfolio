"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Link from "next/link"
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

export function About({
  ref,
  isInView
}: {
  ref: React.RefObject<HTMLDivElement | null>
  isInView: boolean
}) {
  return (
    <section id="about" className="flex justify-center items-center py-20 lg:py-32 px-4 bg-slate-800/30 min-h-screen" ref={ref}>
      <div className="flex flex-col md:flex-row gap-8 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-y-12 w-full md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            About
          </h2>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <Card className="flex-col gap-y-4 p-8 bg-card border-border h-full justify-center items-center text-lg">
              <p className="w-full text-muted-foreground leading-relaxed mb-4">
                사용자 경험과 운영 효율을 동시에 고민하는 5년 차 프론트엔드 개발자 이성훈입니다.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                약 10만 명 규모의 B2C 서비스 '소속(sosok)'과 B2B 솔루션 '소속비즈니스'의 프론트엔드 개발을 주도하며 서비스의 성장을 이끌었습니다. React, Next.js, TypeScript를 기반으로 탄탄한 설계를 지향하며, AWS와 GitHub Actions를 활용해 안정적인 CI/CD 환경을 구축 · 운영한 경험이 있습니다.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                저는 코드의 가독성과 재사용성이 팀의 생산성으로 직결된다고 생각합니다. Atomic Design 패턴을 도입하여 컴포넌트를 구조화하고 Storybook을 활용하여 컴포넌트를 문서화하여 협업 효율을 극대화했습니다.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                또한, 기술은 결국 비즈니스 문제를 해결하기 위한 도구라고 생각합니다. 기획 팀부터 영업 팀까지 적극적인 소통으로 잠재적 문제를 사전에 발견하고 해결하여&nbsp;
                <b className="font-semibold text-white">최근 6개월간 운영 서비스 CS 0건</b>
                이라는 기록을 달성했습니다. 이러한 경험을 바탕으로&nbsp;
                <Link
                  href="https://atrix-developer.tistory.com"
                  target="_blank"
                  className="font-bold text-primary underline"
                >
                  티스토리 블로그
                </Link>
                를 통해 기술적 해결 과정을 공유하며 다른 개발자에게 도움이 될 수 있도록 노력하고 있습니다.
              </p>
            </Card>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-y-12 w-full md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Skills
          </h2>

          <div className="flex flex-col gap-y-6 flex-1">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors duration-300">
                  <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="flex items-center gap-x-2 w-fit px-3 py-1 bg-slate-800 text-secondary-foreground rounded-full text-sm"
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
