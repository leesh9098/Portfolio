"use client"

import { motion } from "framer-motion"
import { ArrowDown, FileDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.p
            className="text-primary text-base md:text-lg mb-4 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            안녕하세요. 방문해주셔서 감사합니다.
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl leading-16 font-bold mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            프론트엔드 개발자<br />이성훈입니다.
          </motion.h1>

          <motion.h2
            className="text-xl md:text-[36px] font-bold text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            사용자 경험과 효율을 중요시합니다.
          </motion.h2>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              size="lg"
              className="font-bold"
              asChild
            >
              <Link
                href="/이성훈 이력서.pdf"
                download="이성훈 이력서.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileDown />
                Resume
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        aria-label="Scroll down"
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </motion.a>
    </section>
  )
}
