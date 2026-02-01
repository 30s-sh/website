"use client";

import { useEffect, useState } from "react";
import { Copy, Check } from "lucide-react";
import { codeToHtml } from "shiki";

interface CodeBlockProps {
  children: string;
  lang?: string;
  copyable?: boolean;
}

export function CodeBlock({ children, lang = "bash", copyable = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    codeToHtml(children, {
      lang,
      theme: "github-dark-default",
    }).then(setHtml);
  }, [children, lang]);

  const copy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      {html ? (
        <div
          className="[&>pre]:!bg-card [&>pre]:border [&>pre]:border-border [&>pre]:rounded-lg [&>pre]:p-4 [&>pre]:overflow-x-auto [&>pre]:text-sm"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <pre className="bg-card border border-border rounded-lg p-4 overflow-x-auto text-sm font-mono">
          <code>{children}</code>
        </pre>
      )}
      {copyable && (
        <button
          onClick={copy}
          className="absolute top-2 right-2 p-2 rounded-md bg-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-accent" />
          ) : (
            <Copy className="w-4 h-4 text-muted-foreground" />
          )}
        </button>
      )}
    </div>
  );
}
