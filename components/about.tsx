"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 lg:py-32 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-full"
            >
              <Card className="p-8 bg-card border-border h-full justify-center">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  5년 차 웹 프론트엔드 개발자 이성훈입니다.<br />
                  React 기반의 프레임워크, Typescript를 주력으로 사용했으며, Github actions와 AWS를 활용한 CI/CD 자동화 환경을 구축하여 사용하고 있습니다.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  저는 단순히 기능 구현을 넘어 코드의 재활용성, 가독성, 그리고 유지보수성을 중요시 여깁니다.
                  Atomic Design 패턴을 채택하여 설계 및 리팩토링을 함으로써 협업의 효율또한 극대화했습니다.
                  또한 원활한 의사소통이 조직의 핵심이라는 것을 경험을 통해 깨달았습니다. 이를 기반으로 적극적인 소통을 통해 사전에 발생할 수 있는 문제를 해결한 결과, 최근 약 6개월간 CS 문의 0건이라는 성과를 달성했습니다.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  현재에 만족하지 않고 성장해나가는 개발자가 되기 위해 노력하고 있습니다. 제가 프로젝트를 진행하며 겪었던 어려움과 해결 과정을&nbsp;
                  <Link
                    href="https://atrix-developer.tistory.com"
                    target="_blank"
                    className="font-bold text-white"
                  >
                    티스토리 블로그
                  </Link>
                  에 기록하여 다른 개발자에게 도움이 될 수 있도록 지식을 공유하고 있습니다.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square rounded-lg overflow-hidden border-2 border-primary/20 relative group">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
                <img
                  src="/professional-developer-portrait.png"
                  alt="Profile"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
