import { FileSearch, Building2, Zap, Github } from "lucide-react";

export function WhyItMatters() {
  const points = [
    {
      icon: FileSearch,
      title: "Full activity logging",
      description:
        "Every secret sent, opened, and deleted is logged with timestamps and actor info. Your compliance team gets a real audit trail.",
    },
    {
      icon: Building2,
      title: "Built for teams",
      description:
        "Workspaces, domain verification, and team policies let you enforce security standards across your organization.",
    },
    {
      icon: Zap,
      title: "Fits your workflow",
      description:
        "A single CLI command. No context switching, no web UI, no friction. Security that stays out of your way.",
    },
    {
      icon: Github,
      title: "Open source",
      description:
        "The code is public. You can audit the cryptography, verify our claims, or self-host if you need to.",
    },
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 animate-fade-in-up">
            Why it matters
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto animate-fade-in-up delay-100">
            Passing credentials through chat seems harmless—until your next
            security audit.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <div
              key={point.title}
              className="flex gap-4 p-5 rounded-xl border border-border/50 bg-card/30 hover:border-accent/30 hover:bg-card/50 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:glow-accent-subtle transition-all duration-300">
                  <point.icon className="w-5 h-5 text-accent" />
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1.5">
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
