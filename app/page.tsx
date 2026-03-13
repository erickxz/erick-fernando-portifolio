"use client"

import { useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"

import { Navbar } from "@/components/sections/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { TechStackSection } from "@/components/sections/tech-stack-section"
import { EducationSection } from "@/components/sections/education-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ProjectSheet } from "@/components/sections/project-sheet"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/footer"

import { projects, techStack, navItems } from "@/lib/data"
import type { Project } from "@/lib/types"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "stack", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        navItems={navItems}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        onNavClick={scrollToSection}
        onMenuToggle={() => setIsMenuOpen((prev) => !prev)}
      />

      <HeroSection onScrollToSection={scrollToSection} />
      <AboutSection />
      <ExperienceSection />
      <TechStackSection techStack={techStack} />
      <EducationSection />
      <ProjectsSection projects={projects} onSelectProject={setSelectedProject} />

      <ProjectSheet
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ContactSection />
      <Footer />

      {/* Scroll to Top Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollYProgress.get() > 0.1 ? 1 : 0 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Button
          onClick={scrollToTop}
          size="icon"
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg"
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  )
}
