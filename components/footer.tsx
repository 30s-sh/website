import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-accent" />

            <span className="text-lg font-bold font-mono text-foreground">
              30s
            </span>
          </div>

          <p className="text-sm text-muted-foreground">
            End-to-end encrypted secret handoff for developers.
          </p>

          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} 30s. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
