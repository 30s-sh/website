"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ChevronRight,
  Terminal,
  Send,
  Inbox,
  KeyRound,
  Users,
  Building2,
  Bell,
  Lightbulb,
} from "lucide-react";
import { CodeBlock } from "@/components/code-block";

function Section({
  id,
  icon: Icon,
  title,
  children,
}: {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
          <Icon className="w-5 h-5 text-accent" />
        </div>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <div className="space-y-4 text-muted-foreground">{children}</div>
    </section>
  );
}

const NAV_ITEMS = [
  { id: "getting-started", label: "Getting Started", icon: Terminal },
  { id: "sending", label: "Sending Secrets", icon: Send },
  { id: "inbox", label: "Inbox & Reading", icon: Inbox },
  { id: "contacts", label: "Aliases & Groups", icon: Users },
  { id: "devices", label: "Devices & Keys", icon: KeyRound },
  { id: "workspaces", label: "Workspaces", icon: Building2 },
  { id: "webhooks", label: "Webhooks", icon: Bell },
  { id: "tips", label: "Tips & Tricks", icon: Lightbulb },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("getting-started");

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <a
              href="https://github.com/30s-sh/30s"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-16">
        <div className="flex gap-12">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block w-64 shrink-0">
            <nav className="sticky top-28 space-y-1">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                Documentation
              </p>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${activeSection === item.id
                    ? "bg-accent/10 text-accent border border-accent/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <article className="flex-1 min-w-0 space-y-16">
            {/* Hero */}
            <div className="space-y-4 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="text-gradient">Documentation</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Everything you need to know about using 30s — the end-to-end encrypted
                secret sharing CLI. Browse the docs here, or run{" "}
                <code className="text-accent bg-accent/10 px-1.5 py-0.5 rounded">30s --help</code>{" "}
                anytime.
              </p>
            </div>

            {/* Getting Started */}
            <Section id="getting-started" icon={Terminal} title="Getting Started">
              <p>Install 30s and set up your account in seconds.</p>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Installation</h3>
              <CodeBlock>curl -fsSL https://30s.sh/install | sh</CodeBlock>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Sign in or create an account</h3>
              <CodeBlock>30s init alice@example.com</CodeBlock>
              <p>
                You'll receive a verification code via email. Once verified, your device keys are
                generated locally and you're ready to send secrets.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Check your identity</h3>
              <CodeBlock>30s whoami</CodeBlock>
            </Section>

            {/* Sending Secrets */}
            <Section id="sending" icon={Send} title="Sending Secrets">
              <p>
                Send encrypted secrets to one or more recipients. Secrets auto-expire after a
                configurable duration.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Basic usage</h3>
              <CodeBlock>30s send -t bob@example.com 'my secret message'</CodeBlock>
              <p>
                By default, secrets expire after <strong>30 seconds</strong>. The recipient has that
                window to open it.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Custom expiration</h3>
              <CodeBlock>{`30s send -t bob@example.com 'api key' 5m    # 5 minutes
30s send -t bob@example.com 'password' 1h   # 1 hour
30s send -t bob@example.com 'cert' 7d       # 7 days`}</CodeBlock>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">One-time secrets</h3>
              <p>
                Use <code className="text-accent bg-accent/10 px-1 rounded">-o</code> to delete the
                secret immediately after it's read once:
              </p>
              <CodeBlock>30s send -t bob@example.com -o 'one-time password'</CodeBlock>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Multiple recipients</h3>
              <CodeBlock>30s send -t alice@example.com -t bob@example.com 'shared secret'</CodeBlock>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Delete a sent secret</h3>
              <p>Changed your mind? Delete a secret you sent before it's read:</p>
              <CodeBlock>30s delete abc123-def456</CodeBlock>
            </Section>

            {/* Inbox & Reading */}
            <Section id="inbox" icon={Inbox} title="Inbox & Reading">
              <p>View secrets others have sent you and decrypt them.</p>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">List your inbox</h3>
              <CodeBlock>30s inbox</CodeBlock>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Open a secret</h3>
              <CodeBlock>30s open abc123-def456</CodeBlock>
              <p>
                The secret is decrypted locally using your device keys. It never leaves your
                machine in plaintext.
              </p>
            </Section>

            {/* Aliases & Groups */}
            <Section id="contacts" icon={Users} title="Aliases & Groups">
              <p>
                Save frequently-used contacts as aliases and organize them into groups for quick
                access.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Aliases</h3>
              <CodeBlock>{`30s alias                           # List all aliases
30s alias bob                       # Show what 'bob' maps to
30s alias bob bob@company.com       # Create or update alias
30s alias delete bob                # Remove an alias

# Use aliases when sending
30s send -t bob 'secret'`}</CodeBlock>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Groups</h3>
              <p>
                Groups let you send to multiple people at once. Reference groups with{" "}
                <code className="text-accent bg-accent/10 px-1 rounded">@</code>:
              </p>
              <CodeBlock>{`30s groups                                    # List all groups
30s groups team                               # Show members
30s groups team alice@co.com bob@co.com       # Create/update
30s groups delete team                        # Remove group

# Send to all group members
30s send -t @team 'shared credentials'`}</CodeBlock>
            </Section>

            {/* Devices & Keys */}
            <Section id="devices" icon={KeyRound} title="Devices & Keys">
              <p>
                Manage your registered devices and encryption keys. Each device has its own key
                pair.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">List devices</h3>
              <CodeBlock>30s devices</CodeBlock>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Remove a device</h3>
              <p>If a device is lost or compromised, remove it so secrets can no longer be sent to it:</p>
              <CodeBlock>30s devices delete abc123-def456</CodeBlock>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Rotate keys</h3>
              <p>
                Rotate your API key (requires email verification) or device encryption keys (inbox
                must be empty):
              </p>
              <CodeBlock>{`30s rotate auth    # Rotate API key
30s rotate keys    # Rotate device encryption keys`}</CodeBlock>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Sign out</h3>
              <CodeBlock>30s logout</CodeBlock>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Delete your account</h3>
              <p className="text-destructive-foreground">
                Permanently delete your account and all data:
              </p>
              <CodeBlock>30s destroy</CodeBlock>
            </Section>

            {/* Workspaces */}
            <Section id="workspaces" icon={Building2} title="Workspaces">
              <p>
                Workspaces are for teams and organizations. Verify your domain and set policies
                for your team.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Create a workspace</h3>
              <CodeBlock>30s workspace create 'Acme Corp'</CodeBlock>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Domain verification</h3>
              <CodeBlock>{`30s workspace domain add acme.com      # Start verification
30s workspace domain verify acme.com   # Complete verification
30s workspace domains                  # List all domains`}</CodeBlock>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Policies</h3>
              <p>
                Workspace admins can enforce policies like maximum TTL or requiring one-time
                secrets:
              </p>
              <CodeBlock>{`30s workspace policies                      # View current policies
30s workspace policy set max-ttl 1h         # Max 1 hour expiration
30s workspace policy set require-once true  # Require one-time reads
30s workspace policy clear max-ttl          # Remove restriction`}</CodeBlock>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Activity log</h3>
              <p>Paid workspaces can view an audit log of all drop activity:</p>
              <CodeBlock>{`30s activity                      # Last 7 days
30s activity --since 24h          # Last 24 hours
30s activity --type drop.sent     # Filter by event type
30s activity --all                # Fetch all entries`}</CodeBlock>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Billing</h3>
              <CodeBlock>{`30s billing              # Show billing status
30s billing subscribe    # Subscribe to paid plan
30s billing manage       # Open Stripe portal`}</CodeBlock>
            </Section>

            {/* Webhooks */}
            <Section id="webhooks" icon={Bell} title="Webhooks">
              <p>
                Get notified when drops are sent, opened, or deleted via HTTP webhooks.
              </p>

              <CodeBlock>{`30s webhooks                            # Show current config
30s webhooks set https://example.com    # Set webhook URL
30s webhooks test                       # Send a test event
30s webhooks clear                      # Remove webhook`}</CodeBlock>
            </Section>

            {/* Tips & Tricks */}
            <Section id="tips" icon={Lightbulb} title="Tips & Tricks">
              <p>Power-user tips to get the most out of 30s.</p>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">
                Pipe content from stdin
              </h3>
              <p>
                Use <code className="text-accent bg-accent/10 px-1 rounded">-</code> to read the
                secret from stdin. Great for piping file contents or command output:
              </p>
              <CodeBlock>{`# Send a file
cat ~/.ssh/id_rsa.pub | 30s send -t bob@example.com -

# Send command output
kubectl get secret my-secret -o json | 30s send -t ops@example.com -

# Send from a password manager
pass show api/production | 30s send -t deploy@example.com -`}</CodeBlock>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Shell completions</h3>
              <p>Enable tab completion for your shell:</p>
              <CodeBlock>{`# Bash
30s completions bash > ~/.bash_completion.d/30s

# Zsh
30s completions zsh > ~/.zfunc/_30s

# Fish
30s completions fish > ~/.config/fish/completions/30s.fish`}</CodeBlock>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">
                Quick send with aliases
              </h3>
              <p>Set up aliases for people you share secrets with often:</p>
              <CodeBlock>{`30s alias deploy deploy@mycompany.com
30s alias cto sarah@mycompany.com

# Now sending is fast
30s send -t deploy 'new API key'
30s send -t cto -o 'board meeting link'`}</CodeBlock>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">
                Team distribution with groups
              </h3>
              <CodeBlock>{`30s groups devs alice@co.com bob@co.com charlie@co.com
30s send -t @devs 'staging db password' 1h`}</CodeBlock>
            </Section>

            {/* Footer CTA */}
            <div className="pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="font-medium text-foreground">Ready to get started?</p>
                  <p className="text-sm text-muted-foreground">
                    Install 30s and start sharing secrets securely.
                  </p>
                </div>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
                >
                  Get Started
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
