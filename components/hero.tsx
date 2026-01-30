"use client";

import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("curl -sSL https://30s.sh/install.sh | sh");

    import("@plausible-analytics/tracker").then(({ track }) => {
      track("install command copied", {});
    });

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-32 px-6 relative overflow-hidden">
      {/* Gradient orbs for ambient lighting */}
      <div className="gradient-orb w-[500px] h-[500px] bg-accent/20 -top-48 left-1/2 -translate-x-1/2" />
      <div className="gradient-orb w-[400px] h-[400px] bg-accent/15 top-1/3 -right-32" />
      <div className="gradient-orb w-[300px] h-[300px] bg-purple-500/10 bottom-0 left-1/4" />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 mb-8 glow-accent-subtle">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-sm text-accent font-medium">Now in Beta</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl text-balance text-gradient">
            Stop pasting secrets in Slack.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty">
            End-to-end encrypted, expiring by default. The secure way to hand
            off API keys, tokens, and credentials to teammates.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="flex items-center gap-3 rounded-lg border border-border/50 bg-card/80 backdrop-blur-sm px-4 py-3 font-mono text-sm hover:border-accent/30 transition-colors">
              <code className="text-foreground">
                curl -sSL https://30s.sh/install.sh | sh
              </code>

              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground transition-colors"
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

            <p className="text-sm text-muted-foreground">
              Open source and available on{" "}
              <a
                href="https://github.com/30s-sh/30s"
                className="text-foreground hover:text-accent transition-colors underline underline-offset-4"
              >
                GitHub
              </a>.
            </p>
          </div>

          <div className="mt-16 w-full max-w-5xl">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Sender terminal - Bob */}
              <div className="rounded-xl border border-accent/20 bg-card overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-secondary/30 relative">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>

                  <span className="text-xs text-muted-foreground font-mono ml-2">
                    bob@laptop
                  </span>
                </div>

                <div className="p-6 font-mono text-sm text-left space-y-6 relative">
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
                        30s send --to alice@ac.me &quot;sk_abc123&quot;
                      </span>
                    </div>
                    <div className="text-muted-foreground mt-1 ml-4">
                      <p>Encrypting for alice@ac.me</p>
                      <p className="text-accent">Sent. Expires in 30s.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Receiver terminal - Alice */}
              <div className="rounded-xl border border-accent/20 bg-card overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-secondary/30 relative">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>

                  <span className="text-xs text-muted-foreground font-mono ml-2">
                    alice@desktop
                  </span>
                </div>

                <div className="p-6 font-mono text-sm text-left space-y-6 relative">
                  <div>
                    <div className="flex items-start gap-2">
                      <span className="text-accent">$</span>
                      <span className="text-foreground">30s inbox</span>
                    </div>
                    <div className="text-muted-foreground mt-1 ml-4">
                      <p>1 new secret from bob@ac.me</p>
                      <p className="text-foreground/70">  d4f8e2a1  expires in 28s</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-2">
                      <span className="text-accent">$</span>
                      <span className="text-foreground">30s open d4f8e2a1</span>
                    </div>
                    <div className="text-muted-foreground mt-1 ml-4">
                      <p>Decrypting...</p>
                      <p className="text-accent">sk_abc123</p>
                    </div>
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
