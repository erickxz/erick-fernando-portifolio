import {
  Layers,
  Database,
  Workflow,
  BarChart3,
  Terminal,
} from "lucide-react"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiGit,
  SiZoho,
  SiPython,
} from "react-icons/si"
import type { Project, TechCategory, NavItem, TechLogo } from "@/lib/types"

export const projects: Project[] = [
  {
    title: "ERICK WEAR E-commerce",
    description: "E-commerce fullstack com arquitetura moderna",
    problem:
      "Necessidade de uma plataforma completa de vendas online com checkout integrado e gestão de pedidos.",
    solution:
      "Desenvolvi um e-commerce fullstack cobrindo todo o fluxo de compra: autenticação segura, navegação de produtos, carrinho com controle de estado, checkout com validação de endereço, pagamentos online com Stripe e histórico de pedidos com atualização automática de status.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "Drizzle ORM",
      "PostgreSQL",
      "Stripe",
      "BetterAuth",
    ],
    impact: "Projeto pessoal fullstack",
    image: "/projects/project-erickwear.png",
    type: "personal",
  },
  {
    title: "Atividades da Ala Parque da Fonte",
    description: "Plataforma para divulgação e inscrição em atividades da Ala Parque da Fonte.",
    problem:
      "As atividades gratuitas da congregação — eventos, aulas e ações sociais — eram divulgadas de forma informal, fazendo com que muitas pessoas não ficassem sabendo ou a informação se perdesse.",
    solution:
      "Desenvolvi uma aplicação web que centraliza todas as atividades da ala, exibindo data, horário, local e responsável. Os participantes podem se candidatar diretamente pelo site. Também criei um painel administrativo que permite cadastrar, editar ou inativar atividades, visualizar inscritos e entrar em contato rapidamente com os participantes.",
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Vercel"],
    impact:
      "Projeto voluntário em produção utilizado pela congregação, já recebendo inscrições para as atividades.",
    image: "/projects/project-sud.jpg",
    type: "volunteer",
  },
  {
    title: "Sistema de Inventário",
    description: "Gestão operacional com controle de estoque",
    problem: "Erros manuais frequentes, dados desorganizados e processos de estoque lentos e ineficientes.",
    solution:
      "Desenvolvi um sistema completo de inventário com controle de estoque, movimentações, transferências, cancelamentos, cadastro e categorização de produtos, geração automática de códigos e consultas operacionais com regras de negócio bem definidas.",
    technologies: ["React", "Next.js", "TypeScript", "PostgreSQL", "REST APIs", "Tailwind CSS"],
    impact: "Redução de erros manuais e automação de processos",
    image: "/projects/project-inventario.png",
    type: "corporate",
  },
  {
    title: "Módulo de Recepção",
    description: "Controle de visitantes em tempo real",
    problem:
      "Substituição necessária de licença Protheus para controle de visitantes, sem histórico adequado para auditorias.",
    solution:
      "Desenvolvi sistema próprio de recepção com controle de visitantes em tempo real, registro completo de dados pessoais e documentos, histórico de acessos detalhado e suporte completo a auditorias internas.",
    technologies: ["React", "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "shadcn/ui"],
    impact: "Substituição de licença e controle em tempo real",
    image: "/projects/project-recepcao.png",
    type: "corporate",
  },
  {
    title: "Comissões de Vendas (RH)",
    description: "Automação de cálculo de comissões",
    problem:
      "Consolidação manual de vendas e cálculo de comissões demandava muito tempo e era suscetível a erros.",
    solution:
      "Automatizei a consolidação de vendas e cálculo de comissões por regras de negócio específicas, com integração direta à folha de pagamento do Protheus e uso centralizado pelo RH, incluindo sincronização em lote e visualização detalhada por vendedor.",
    technologies: ["React", "Next.js", "TypeScript", "PostgreSQL", "Protheus API", "Tailwind CSS"],
    impact: "Automação completa do fluxo de comissões",
    image: "/projects/project-comissoes.png",
    type: "corporate",
  },
]

export const techStack: TechCategory[] = [
  {
    category: "Frontend",
    focus: "Interfaces Reativas",
    icon: Layers,
    color: "from-blue-500 to-cyan-500",
    glow: "rgba(59, 130, 246, 0.5)",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    logos: [
      { node: <SiReact size={30} />, title: "React" },
      { node: <SiNextdotjs size={30} />, title: "Next.js" },
      { node: <SiTailwindcss size={30} />, title: "Tailwind" },
    ],
  },
  {
    category: "Backend",
    focus: "Arquitetura & APIs",
    icon: Database,
    color: "from-emerald-500 to-teal-500",
    glow: "rgba(16, 185, 129, 0.5)",
    skills: ["Node.js", "PostgreSQL", "REST APIs", "Drizzle ORM"],
    logos: [
      { node: <SiPostgresql size={30} />, title: "PostgreSQL" },
      { node: <SiTypescript size={30} />, title: "TypeScript" },
      { node: <Terminal size={30} />, title: "APIs" },
    ],
  },
  {
    category: "Automações",
    focus: "Scripts & Fluxos",
    icon: Workflow,
    color: "from-orange-500 to-amber-500",
    glow: "rgba(245, 158, 11, 0.5)",
    skills: ["Python", "Deluge", "Webhooks", "Git"],
    logos: [
      { node: <SiGit size={30} />, title: "Git" },
      { node: <SiPython size={30} />, title: "Python" },
      { node: <Workflow size={30} />, title: "Fluxos" },
    ],
  },
  {
    category: "Negócios",
    focus: "Gestão & Dashboards",
    icon: BarChart3,
    color: "from-purple-500 to-indigo-500",
    glow: "rgba(139, 92, 246, 0.5)",
    skills: ["Zoho CRM", "Protheus", "Power BI", "Análise"],
    logos: [
      { node: <SiZoho size={30} />, title: "Zoho" },
      { node: <BarChart3 size={30} />, title: "Power BI" },
      { node: <Layers size={30} />, title: "Enterprise" },
    ],
  },
]

export const techLogos: TechLogo[] = [
  { node: <SiReact size={40} />, title: "React" },
  { node: <SiNextdotjs size={40} />, title: "Next.js" },
  { node: <SiTypescript size={40} />, title: "TypeScript" },
  { node: <SiTailwindcss size={40} />, title: "Tailwind CSS" },
  { node: <SiPostgresql size={40} />, title: "PostgreSQL" },
  { node: <SiGit size={40} />, title: "Git" },
  { node: <SiZoho size={40} />, title: "Zoho" },
  { node: <BarChart3 size={40} />, title: "Power BI" },
]

export const navItems: NavItem[] = [
  { label: "Início", id: "home" },
  { label: "Sobre", id: "about" },
  { label: "Experiência", id: "experience" },
  { label: "Stack", id: "stack" },
  { label: "Projetos", id: "projects" },
  { label: "Formação", id: "education" },
  { label: "Contato", id: "contact" },
]
