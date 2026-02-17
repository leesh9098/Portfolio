"use client"

import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("");
  
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const heroIsInView = useInView(heroRef, { margin: "-100px" })
  const aboutIsInView = useInView(aboutRef, { margin: "-100px" })
  const experienceIsInView = useInView(experienceRef, { margin: "-100px" })
  const projectsIsInView = useInView(projectsRef, { margin: "-100px" })
  const contactIsInView = useInView(contactRef, { margin: "-100px" })

  useEffect(() => {
    if (aboutIsInView) {
      setActiveSection("About & Skills")
    } else if (experienceIsInView) {
      setActiveSection("Experience")
    } else if (projectsIsInView) {
      setActiveSection("Side Projects")
    } else if (contactIsInView) {
      setActiveSection("Contact")
    } else {
      setActiveSection("Hero")
    }
  }, [heroIsInView, aboutIsInView, experienceIsInView, projectsIsInView, contactIsInView])

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} />
      <main>
        <Hero />
        <About
          ref={aboutRef}
          isInView={aboutIsInView}
        />
        <Experience
          ref={experienceRef}
          isInView={experienceIsInView}
        />
        <Projects
          ref={projectsRef}
          isInView={projectsIsInView}
        />
        <Contact
          ref={contactRef}
          isInView={contactIsInView}
        />
      </main>
      {activeSection !== "Hero" && (
        <motion.button
          className="fixed right-4 bottom-4 size-10 bg-primary text-primary-foreground inline-flex items-center justify-center rounded-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp size={16} />
        </motion.button>
      )}
    </div>
  )
}
