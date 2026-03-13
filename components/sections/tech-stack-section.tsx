"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import type { TechCategory } from "@/lib/types"

interface TechStackSectionProps {
  techStack: TechCategory[]
}

export function TechStackSection({ techStack }: TechStackSectionProps) {
  return (
    <section id="stack" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Tecnologias
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Stack Técnica
            </h2>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Visual Connector Line */}
              <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-[1px] bg-gradient-to-r from-border to-transparent z-0 last:hidden" />

              <Card className="bg-card/40 border-border/50 backdrop-blur-xl overflow-hidden hover:border-primary/50 transition-all duration-500 h-full group-hover:-translate-y-2">
                <CardContent className="p-8">
                  {/* Floating Logo Galaxy */}
                  <div className="relative h-32 mb-8 flex items-center justify-center">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 blur-3xl group-hover:opacity-30 transition-opacity duration-700`} />

                    {/* Central Icon */}
                    <div className="relative w-16 h-16 bg-background border border-white/10 rounded-2xl flex items-center justify-center z-10 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <category.icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Orbiting Mini Logos */}
                    {category.logos.map((logo, lIdx) => (
                      <motion.div
                        key={lIdx}
                        animate={{
                          y: [0, -10, 0],
                          x: [0, lIdx % 2 === 0 ? 5 : -5, 0],
                        }}
                        transition={{
                          duration: 3 + lIdx,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute text-muted-foreground/40 group-hover:text-primary transition-colors duration-500"
                        style={{
                          top: lIdx === 0 ? "0%" : lIdx === 1 ? "70%" : "40%",
                          left: lIdx === 0 ? "10%" : lIdx === 1 ? "20%" : "80%",
                        }}
                      >
                        {logo.node}
                      </motion.div>
                    ))}
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {category.focus}
                    </h3>
                    <Badge
                      variant="outline"
                      className="mb-6 bg-primary/5 border-primary/20 text-[10px] uppercase font-bold tracking-widest"
                    >
                      {category.category}
                    </Badge>

                    <div className="flex flex-wrap justify-center gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] text-muted-foreground bg-white/5 px-3 py-1 rounded-full border border-transparent group-hover:border-primary/20 group-hover:text-foreground transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
