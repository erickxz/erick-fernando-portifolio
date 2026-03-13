import type { ReactNode, ElementType } from "react"

export interface Project {
  title: string
  description: string
  problem: string
  solution: string
  technologies: string[]
  impact: string
  image: string
  type: "personal" | "volunteer" | "corporate"
}

export interface TechLogo {
  node: ReactNode
  title: string
}

export interface TechCategory {
  category: string
  focus: string
  icon: ElementType
  color: string
  glow: string
  skills: string[]
  logos: TechLogo[]
}

export interface NavItem {
  label: string
  id: string
}
