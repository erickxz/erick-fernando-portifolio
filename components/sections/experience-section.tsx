"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import Image from "next/image"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const responsibilities = [
  "Desenvolvimento de aplicações web com React, Next.js e TypeScript",
  "Criação de automações e integrações com Zoho CRM usando Deluge",
  "Integração de sistemas com APIs REST e ERP Protheus",
  "Desenvolvimento de dashboards e relatórios com Power BI",
  "Análise de dados e otimização de processos empresariais",
]

const technologies = [
  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Zoho CRM", "Deluge", "Power BI", "REST APIs", "PostgreSQL", "Git",
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 bg-card/50">
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
              Trajetória
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Experiência Profissional
            </h2>
          </motion.div>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Card className="bg-card border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-[200px_1fr] divide-y md:divide-y-0 md:divide-x divide-border">
                <div className="p-6 md:p-8 flex flex-col items-center justify-center bg-muted/30">
                  <div className="w-32 h-32 bg-primary/10 rounded-xl flex items-center justify-center mb-4 p-2">
                    <Image
                      src="/images/grupo-aiz-logo.png"
                      alt="GRUPO AIZ"
                      width={112}
                      height={112}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-foreground text-center">GRUPO AIZ</h3>
                  <p className="text-sm text-muted-foreground">São José dos Pinhais, PR</p>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <Badge className="bg-primary text-primary-foreground">
                      Desenvolvedor Full Stack
                    </Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      out 2023 - atual
                    </span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Principais Responsabilidades</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        {responsibilities.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Tecnologias Utilizadas</h4>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="bg-muted/50 border-border text-muted-foreground">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
