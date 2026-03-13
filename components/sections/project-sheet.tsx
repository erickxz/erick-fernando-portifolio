"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Terminal } from "lucide-react"
import Image from "next/image"
import type { Project } from "@/lib/types"

interface ProjectSheetProps {
  project: Project | null
  onClose: () => void
}

const typeLabel = (type: Project["type"]) => {
  if (type === "personal") return "Pessoal"
  if (type === "volunteer") return "Voluntário"
  return "Corporativo"
}

const typeDotClass = (type: Project["type"]) => {
  if (type === "personal") return "bg-blue-400"
  if (type === "volunteer") return "bg-green-400"
  return "bg-primary"
}

export function ProjectSheet({ project, onClose }: ProjectSheetProps) {
  return (
    <Sheet open={!!project} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="h-screen w-full sm:w-[500px] md:w-[600px] lg:w-[800px] max-w-full bg-card/95 backdrop-blur-xl border-l border-white/10 p-0 shadow-2xl overflow-hidden focus:outline-none"
      >
        {project && (
          <div
            className="h-full overflow-y-auto overflow-x-hidden custom-scrollbar"
            onWheel={(e) => e.stopPropagation()}
          >
            {/* Image Header */}
            <div className="relative h-[300px] md:h-[350px] w-full flex-shrink-0">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

              {/* Badge */}
              <div className="absolute top-6 left-6 z-20">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                  <div className={`w-2 h-2 rounded-full ${typeDotClass(project.type)} animate-pulse`} />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest leading-none">
                    {typeLabel(project.type)}
                  </span>
                </div>
              </div>

              {/* Title */}
              <div className="absolute bottom-6 left-8 right-8 z-10">
                <SheetHeader className="space-y-1">
                  <SheetTitle className="text-3xl md:text-4xl font-extrabold text-white tracking-tighter leading-tight drop-shadow-md">
                    {project.title}
                  </SheetTitle>
                  <div className="h-1 w-12 bg-primary rounded-full mt-2" />
                  <p className="sr-only">Detalhes do projeto {project.title}</p>
                </SheetHeader>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 space-y-12">
              <div className="grid grid-cols-1 gap-12">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  <h4 className="text-[12px] text-primary font-black uppercase tracking-[0.4em] mb-4 flex items-center gap-3">
                    <span className="w-6 h-px bg-primary/40" />
                    O DESAFIO
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg selection:bg-primary/30">
                    {project.problem}
                  </p>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  <h4 className="text-[12px] text-primary font-black uppercase tracking-[0.4em] mb-4 flex items-center gap-3">
                    <span className="w-6 h-px bg-primary/40" />
                    SOLUÇÃO DESENVOLVIDA
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg selection:bg-primary/30">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h4 className="text-[12px] text-primary font-black uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                  <span className="w-6 h-px bg-primary/40" />
                  TECNOLOGIAS
                </h4>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-white/5 hover:bg-primary/10 hover:text-primary border-white/10 transition-all py-2 px-4 rounded-xl text-xs font-semibold"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="pt-4 pb-4">
                <div className="relative p-10 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/30 group hover:border-primary/60 transition-all duration-500 overflow-hidden shadow-2xl">
                  <div className="absolute -top-4 -right-4 text-primary/10 group-hover:text-primary/20 transition-all duration-700 scale-150 rotate-12">
                    <Terminal size={120} />
                  </div>
                  <h4 className="text-[12px] text-primary font-black uppercase tracking-[0.4em] mb-4">
                    RESULTADO E IMPACTO
                  </h4>
                  <p className="text-foreground font-black text-2xl md:text-3xl leading-tight tracking-tight">
                    {project.impact}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <div className="pb-8">
                <Button
                  onClick={onClose}
                  className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Fechar Detalhes
                </Button>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
