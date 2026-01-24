"use client";

import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("curl -sSL https://30s.sh/install.sh | sh");

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-sm text-accent font-medium">Now in Beta</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl text-balance">
            Encrypted handoffs in seconds
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty">
            End-to-end encrypted, expiring by default. The secure way to hand
            off API keys, tokens, and credentials to teammates.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 font-mono text-sm">
              <code className="text-foreground">
                curl -sSL https://30s.sh/install.sh | sh
              </code>

              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
                onClick={copyCommand}
              >
                {copied ? (
                  <Check className="h-4 w-4 text-accent" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}

                <span className="sr-only">Copy install command</span>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">Free during beta.</p>
          </div>

          <div className="mt-16 w-full max-w-3xl">
            <div className="rounded-lg border border-border bg-card overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                </div>

                <span className="text-xs text-muted-foreground font-mono ml-2">
                  terminal
                </span>
              </div>

              <div className="p-6 font-mono text-sm text-left space-y-6">
                <div>
                  <div className="flex items-start gap-2">
                    <span className="text-accent">$</span>
                    <span className="text-foreground">
                      curl -sSL https://30s.sh/install.sh | sh
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-1 ml-4">
                    Installing 30s...
                  </p>
                </div>

                <div>
                  <div className="flex items-start gap-2">
                    <span className="text-accent">$</span>
                    <span className="text-foreground">30s init bob@ac.me</span>
                  </div>
                  <div className="text-muted-foreground mt-1 ml-4">
                    <p>Generating keypair...</p>
                    <p className="text-accent">Registered as bob@ac.me</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-2">
                    <span className="text-accent">$</span>
                    <span className="text-foreground">
                      30s send --to alice@ac.me "sk_abc123" 24h
                    </span>
                  </div>
                  <div className="text-muted-foreground mt-1 ml-4">
                    <p>Encrypting for alice@ac.me</p>
                    <p className="text-accent">Sent. Expires in 24h.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
