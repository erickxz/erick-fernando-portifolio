export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          2026 Erick Fernando. Desenvolvido com Next.js e Tailwind CSS.
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          São José dos Pinhais, PR
        </div>
      </div>
    </footer>
  )
}
