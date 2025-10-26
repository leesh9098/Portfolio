"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="container mx-auto max-w-4xl text-center">
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
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            이성훈 Sunghoon Lee
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            최고를 향해 나아가는<br />웹 프론트엔드 개발자입니다.
          </motion.h2>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
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
