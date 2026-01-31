import { Lock, KeyRound, Timer, ServerOff } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: KeyRound,
      title: "Local key generation",
      description:
        "Your keypair is generated on your device. Private keys never leave your machine.",
    },
    {
      icon: Lock,
      title: "Envelope encryption",
      description:
        "Secrets are encrypted with AES-256, then wrapped per-recipient using their public key.",
    },
    {
      icon: ServerOff,
      title: "Zero plaintext on server",
      description:
        "We only store ciphertext. Even with full database access, secrets remain unreadable.",
    },
    {
      icon: Timer,
      title: "Auto-expiration",
      description:
        "Secrets delete after 30 seconds to 24 hours. No lingering credentials.",
    },
  ];

  return (
    <section className="pt-8 pb-20 px-6 relative">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 animate-fade-in-up">
            Under the hood
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto animate-fade-in-up delay-100">
            Security that doesn't get in the way
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`flex gap-4 p-5 rounded-xl border border-border/50 bg-card/30 hover:border-accent/30 hover:bg-card/50 transition-all duration-300 group animate-fade-in-up delay-${(index + 2) * 100}`}
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:glow-accent-subtle transition-all duration-300">
                  <step.icon className="w-5 h-5 text-accent" />
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1.5">
                  {step.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
