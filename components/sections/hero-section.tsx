"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import DarkVeil from "@/components/dark-veil"
import Typewriter from "@/components/typewriter"

interface HeroSectionProps {
  onScrollToSection: (id: string) => void
}

export function HeroSection({ onScrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="absolute inset-0">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 mb-6 px-4 py-2">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
              Disponível para novos projetos
            </Badge>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Olá, eu sou</span>
            <br />
            <span className="text-primary">Erick Fernando</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8 font-light min-h-[4rem]">
            <span className="text-foreground font-medium block sm:inline">
              <Typewriter
                texts={[
                  "Desenvolvedor Full Stack",
                  "Desenvolvedor React & Next.js",
                  "Especialista em Automações",
                  "Desenvolvedor Zoho",
                  "Construtor de Sistemas e Integrações",
                ]}
                delay={80}
                wait={3000}
              />
            </span>
            <br className="sm:hidden" />
            {" "}construindo aplicações modernas, automações e integrações que escalam negócios.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 group"
              onClick={() => onScrollToSection("projects")}
            >
              Ver Projetos
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-muted px-8 bg-transparent"
              onClick={() => onScrollToSection("contact")}
            >
              Entrar em Contato
            </Button>
          </div>

          <div className="flex items-center gap-6 text-muted-foreground">
            <a
              href="https://www.linkedin.com/in/erick-fernando-94227025a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/erickfernando"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:erickpequeno29@gmail.com"
              className="hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
