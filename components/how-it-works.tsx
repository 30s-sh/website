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
        "Secrets are encrypted with a one-time key, which is then encrypted with the recipient's public key. Only they can unlock it.",
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
    <section className="py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="grid sm:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-accent" />
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1">
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
