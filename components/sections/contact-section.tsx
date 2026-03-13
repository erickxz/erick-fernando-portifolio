"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"

interface ContactSectionProps {
  onScrollToSection?: (id: string) => void
}

export function ContactSection({ onScrollToSection }: ContactSectionProps) {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Contato
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Vamos trabalhar juntos?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Estou sempre aberto a discutir novos projetos, oportunidades ou parcerias.
              Entre em contato e vamos conversar.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 group"
              asChild
            >
              <a href="mailto:erickpequeno29@gmail.com">
                <Mail className="mr-2 w-4 h-4" />
                erickpequeno29@gmail.com
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-muted px-8 bg-transparent group"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/erick-fernando-94227025a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 w-4 h-4" />
                LinkedIn
                <ExternalLink className="ml-2 w-3 h-3 opacity-50" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="https://www.linkedin.com/in/erick-fernando-94227025a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/erickxz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:erickpequeno29@gmail.com"
              className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
