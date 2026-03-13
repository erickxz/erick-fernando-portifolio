"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"
import { staggerContainer, fadeInUp } from "@/lib/animations"
import type { Project } from "@/lib/types"

interface ProjectsSectionProps {
  projects: Project[]
  onSelectProject: (project: Project) => void
}

export function ProjectsSection({ projects, onSelectProject }: ProjectsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -524, behavior: "smooth" })
  }

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 524, behavior: "smooth" })
  }

  const typeLabel = (type: Project["type"]) => {
    if (type === "personal") return "Projeto Pessoal"
    if (type === "volunteer") return "Projeto Voluntário"
    return "Projeto Corporativo"
  }

  const typeBadgeClass = (type: Project["type"]) => {
    if (type === "personal") return "bg-blue-500/20 text-blue-400 border-blue-500/30"
    if (type === "volunteer") return "bg-green-500/20 text-green-400 border-green-500/30"
    return "bg-primary/20 text-primary border-primary/30"
  }

  return (
    <section id="projects" className="py-24 bg-card/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.div variants={fadeInUp}>
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Portfolio</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Projetos em Destaque
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Utilize as setas laterais para explorar os projetos.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Carousel Container */}
      <div className="relative group/carousel">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-card/90 backdrop-blur-sm border border-border shadow-xl flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          aria-label="Projeto anterior"
        >
          <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-card/90 backdrop-blur-sm border border-border shadow-xl flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          aria-label="Próximo projeto"
        >
          <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
        </button>

        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-8 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-[5] pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-8 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-[5] pointer-events-none" />

        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto pb-8 px-12 md:px-20 snap-x snap-mandatory scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-[85vw] md:w-[500px] snap-center relative z-10 hover:z-20"
            >
              <Card
                className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-500 group cursor-pointer h-full hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] hover:-translate-y-1.5"
                onClick={() => onSelectProject(project)}
              >
                <div className="h-full border border-transparent group-hover:border-primary/20">
                  <CardContent className="p-0 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-64 bg-card overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover object-top group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent pointer-events-none z-10" />
                      <div className="absolute top-4 left-4">
                        <Badge className={typeBadgeClass(project.type)}>
                          {typeLabel(project.type)}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs bg-muted/50 border-border text-muted-foreground"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge
                            variant="outline"
                            className="text-xs bg-muted/50 border-border text-muted-foreground"
                          >
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="text-sm text-primary font-medium">{project.impact}</span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {projects.map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-muted-foreground/30" />
          ))}
        </div>
      </div>
    </section>
  )
}
