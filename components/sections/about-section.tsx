"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeInUp} className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-6" />
              <div className="absolute inset-0 bg-card rounded-2xl border border-border overflow-hidden">
                <Image
                  src="/images/Foto Erick.jpg"
                  alt="Erick Fernando"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-xl">
                <p className="text-sm text-muted-foreground">Experiência</p>
                <p className="text-2xl font-bold text-primary">+2 anos</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Sobre Mim
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Desenvolvedor orientado a{" "}
              <span className="text-primary">resultados</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Atuo como Desenvolvedor Full Stack no{" "}
                <strong className="text-foreground">GRUPO AIZ</strong>, onde
                desenvolvo aplicações web, automações e integrações que impactam
                diretamente a eficiência operacional da empresa.
              </p>
              <p>
                Minha especialidade está em conectar sistemas, criar fluxos
                automatizados e desenvolver interfaces modernas que simplificam
                processos complexos.
              </p>
              <p>
                Tenho facilidade em traduzir necessidades de negócio em soluções
                técnicas, comunicando de forma clara entre equipes técnicas e
                não técnicas.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground italic">
                * Explore as especialidades detalhadas na seção de{" "}
                <span className="text-primary font-medium">Tech Stack</span> abaixo.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
