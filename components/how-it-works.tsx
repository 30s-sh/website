import { Lock, KeyRound, Timer, ServerOff } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: KeyRound,
      title: "Your keys, your device",
      description:
        "When you sign up, a keypair is generated locally. Your private key never leaves your machine.",
    },
    {
      icon: Lock,
      title: "Envelope encryption",
      description:
        "Secrets are encrypted with a random one-time key, which is then wrapped for each recipient using their public key. Only they can unlock it.",
    },
    {
      icon: ServerOff,
      title: "Zero plaintext",
      description:
        "Our server only sees ciphertext. We couldn't read your secrets even if we wanted to.",
    },
    {
      icon: Timer,
      title: "Expires by default",
      description:
        "Secrets auto-delete after 24 hours (or sooner). No lingering credentials, no forgotten tokens.",
    },
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 animate-fade-in-up">
            How it works
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
