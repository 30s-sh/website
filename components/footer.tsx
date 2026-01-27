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

          <ul className="flex flex-wrap items-center justify-center gap-2">
            <li className="text-sm"><a href="https://status.30s.sh">Status</a></li>
            <li className="text-muted-foreground">&middot;</li>
            <li className="text-sm"><a href="https://github.com/30s-sh/30s">GitHub</a></li>
          </ul>

          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} 30s. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
