"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Layers, Database, Terminal, ExternalLink } from "lucide-react"
import Image from "next/image"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const educationList = [
  {
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "Centro Universitário Internacional UNINTER",
    period: "2025 - 2028",
    logo: "/uninter.jpg",
    status: "Em Andamento",
    color: "from-blue-500/20 to-indigo-500/20",
    description:
      "Desenvolvimento de competências em arquitetura de software, processos ágeis e tecnologias emergentes.",
    highlights: ["Engenharia de Software", "Cloud Computing", "Clean Code"],
  },
  {
    degree: "Técnico em Desenvolvimento de Sistemas",
    institution: "SENAI Afonso Pena - PR",
    period: "2023 - 2024",
    logo: "/senai.png",
    status: "Concluído",
    color: "from-red-500/20 to-orange-500/20",
    description:
      "Fundamentos sólidos em algoritmos, modelagem de dados e desenvolvimento de aplicações multiplataforma.",
    highlights: ["Lógica Avançada", "Java & C#", "Bancos de Dados SQL"],
  },
]

const certificationList = [
  {
    name: "Técnico em Desenvolvimento de Sistemas",
    issuer: "SENAI",
    date: "2024",
    type: "Technical",
    image: "/senai.png",
    zoom: "scale-[1.1]",
  },
  {
    name: "Professional Proficiency: TOEIC",
    issuer: "ETS Global",
    date: "2024",
    type: "Language",
    image: "/toeic.png",
    zoom: "scale-100",
  },
  {
    name: "Fundamentos do Docker",
    issuer: "Full Stack Club",
    date: "Nov 2025",
    type: "DevOps",
    image: "/docker.png",
    zoom: "scale-100",
  },
]

const certTypeStyles: Record<string, string> = {
  Language: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Technical: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  DevOps: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
}

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-4 bg-background">
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
              Qualificações
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Educação & Certificações
            </h2>
          </motion.div>
        </motion.div>

        <div className="space-y-32">
          {/* Academic Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-6 mb-16">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shadow-inner flex-shrink-0">
                <Layers className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-foreground tracking-tight">Jornada Acadêmica</h3>
                <p className="text-sm text-muted-foreground mt-1 underline decoration-primary/30 underline-offset-4 font-medium tracking-wide">
                  Minha base educacional e técnica
                </p>
              </div>
            </div>

            <div className="space-y-8 pl-4 md:pl-20">
              {educationList.map((edu, idx) => (
                <motion.div
                  key={idx}
                  className="relative pl-12 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-0 top-0 h-full w-[1px] bg-border group-hover:bg-primary/30 transition-colors duration-500" />
                  <div className="absolute -left-[9px] top-6 w-[18px] h-[18px] rounded-full bg-background border border-border group-hover:border-primary group-hover:scale-110 transition-all duration-500 z-10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary group-hover:animate-pulse transition-colors" />
                  </div>

                  <Card className="bg-gradient-to-br from-card/40 to-card/20 border-border/40 backdrop-blur-xl overflow-hidden hover:border-primary/40 transition-all duration-500 group-hover:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)] group-hover:-translate-y-0.5">
                    <div className={`absolute -right-20 -top-20 w-48 h-48 bg-gradient-to-br ${edu.color} blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />

                    <CardContent className="p-6 relative z-10 flex flex-col md:flex-row gap-8">
                      <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
                        <div className="relative w-16 h-16 p-1 rounded-xl bg-gradient-to-br from-white/10 to-white/5 shadow-2xl overflow-hidden border border-white/10">
                          {edu.logo ? (
                            <Image
                              src={edu.logo}
                              alt={edu.institution}
                              fill
                              className="object-contain p-3"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Layers className="w-8 h-8 text-primary/40" />
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex-grow pt-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                          <div>
                            <div className="flex items-center gap-3 mb-1.5">
                              <Badge
                                variant="outline"
                                className={`bg-background/50 border-white/5 text-[9px] px-1.5 py-0 uppercase tracking-[0.15em] font-black ${
                                  edu.status === "Em Andamento"
                                    ? "text-blue-400 border-blue-500/20"
                                    : "text-emerald-400 border-emerald-500/20"
                                }`}
                              >
                                {edu.status}
                              </Badge>
                              <span className="text-[9px] text-muted-foreground/60 font-bold uppercase tracking-widest leading-none">
                                {edu.period}
                              </span>
                            </div>
                            <h4 className="text-xl md:text-2xl font-black text-foreground group-hover:text-primary transition-colors duration-500 tracking-tight leading-none uppercase">
                              {edu.degree}
                            </h4>
                          </div>
                        </div>

                        <div className="mb-4 flex items-center gap-2">
                          <div className="h-px w-6 bg-primary/30" />
                          <p className="text-primary font-bold text-base tracking-tight uppercase">
                            {edu.institution}
                          </p>
                        </div>

                        <p className="text-muted-foreground max-w-2xl leading-relaxed text-xs mb-6 font-medium">
                          {edu.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((tag) => (
                            <span
                              key={tag}
                              className="text-[9px] font-bold text-muted-foreground bg-white/5 border border-white/5 px-2 py-0.5 rounded-md uppercase tracking-wider group-hover:border-primary/20 group-hover:text-foreground transition-all duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="hidden lg:flex flex-col items-center justify-center opacity-5 group-hover:opacity-100 transition-opacity duration-700 border-l border-white/5 pl-6">
                        <Terminal className="w-5 h-5 text-primary mb-1.5" />
                        <div className="w-[1px] h-10 bg-gradient-to-b from-primary to-transparent" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-6 mb-16">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shadow-inner flex-shrink-0">
                <Database className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-foreground tracking-tight">
                  Certificações & Idiomas
                </h3>
                <p className="text-sm text-muted-foreground mt-1 underline decoration-primary/30 underline-offset-4 font-medium tracking-wide">
                  Especializações e marcos de carreira
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-0 md:pl-20">
              {certificationList.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group h-full"
                >
                  <Card className="bg-gradient-to-br from-card/90 to-card/40 border-border/40 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden h-full shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-[50px] group-hover:bg-primary/20 transition-all duration-700" />

                    <CardContent className="p-6 relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-6">
                        <div
                          className={`text-[9px] uppercase font-black tracking-[0.15em] px-2.5 py-1 rounded border backdrop-blur-md ${
                            certTypeStyles[cert.type] ?? "bg-primary/10 text-primary border-primary/20"
                          }`}
                        >
                          {cert.type}
                        </div>
                        <span className="text-[10px] font-bold text-muted-foreground/40">
                          {cert.date}
                        </span>
                      </div>

                      <div className="flex gap-4 items-start flex-grow">
                        {cert.image && (
                          <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg shadow-md border border-white/10 group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                            <div className="relative w-full h-full">
                              <Image
                                src={cert.image}
                                alt={cert.issuer}
                                fill
                                className={`object-cover ${cert.zoom ?? "scale-100"}`}
                              />
                            </div>
                          </div>
                        )}
                        <div>
                          <h4 className="font-bold text-foreground text-base group-hover:text-primary transition-colors duration-300 leading-tight uppercase tracking-tight mb-1">
                            {cert.name}
                          </h4>
                          <p className="text-[10px] text-muted-foreground/60 font-semibold italic">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between opacity-40 group-hover:opacity-100 transition-all duration-500">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-primary/80 group-hover:text-primary">
                          Ver Credencial
                        </span>
                        <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:rotate-[360deg]">
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
