import { Terminal } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/50 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-center">
          <div className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Terminal className="h-5 w-5 text-accent relative" />
            </div>
            <span className="text-2xl font-bold font-mono text-foreground">
              30s
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
