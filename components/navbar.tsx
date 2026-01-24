import { Terminal } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-center">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-accent" />
            <span className="text-2xl font-bold font-mono text-foreground">
              30s
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
