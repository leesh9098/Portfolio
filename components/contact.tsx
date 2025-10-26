"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-20 lg:py-32 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Contact Me
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            저에 대해 궁금하신 점이 있다면 연락주세요. 언제나 기다리고 있습니다
          </p>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-fit mx-auto"
          >
            <Link href="mailto:leesh9098@naver.com">
              <Button className="w-48">
                Send Message
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.footer
        className="mt-20 pt-8 border-t border-border text-center text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p className="text-sm">© 2025 Sunghoon Lee. Built with Next.js and Framer Motion.</p>
      </motion.footer>
    </section>
  )
}
