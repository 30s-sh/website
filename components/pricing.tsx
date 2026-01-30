import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section className="pt-6 pb-20 px-6 relative">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Pricing</h2>
          <p className="text-muted-foreground">Simple, transparent pricing for everyone</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Free Tier */}
          <div className="border border-border/50 rounded-xl p-8 bg-card/30 hover:border-border transition-colors">
            <h3 className="text-xl font-semibold text-foreground mb-2">Free</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-foreground">$0</span>
              <span className="text-muted-foreground"> / month</span>
            </div>
            <p className="text-muted-foreground mb-6">For individuals getting started.</p>
            <ul className="space-y-3 text-foreground/90">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                50 sends per month
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                End-to-end encryption
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                TTL & one-time view options
              </li>
            </ul>
          </div>

          {/* Pro Tier */}
          <div className="border border-accent/30 rounded-xl p-8 bg-gradient-to-b from-accent/10 via-card/50 to-card/30 relative glow-accent-subtle">
            <div className="absolute -top-3 left-8 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
              Founding Customers
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Pro</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-foreground">$50</span>
              <span className="text-muted-foreground"> / month per workspace</span>
            </div>
            <p className="text-muted-foreground mb-6">For teams that want shared access + guardrails.</p>
            <ul className="space-y-3 text-foreground/90">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                Unlimited domains per workspace (DNS-verified)
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                Anyone with a verified domain can use it
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                Unlimited sends*
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                Team policies (enforce TTL / one-time view / defaults)
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                Team activity log (sent / revealed / expired)
              </li>
            </ul>
            <div className="mt-6 border border-border/50 bg-background/50 rounded-lg p-4 font-mono text-sm">
              <div className="text-xs text-muted-foreground mb-2 font-sans">Upgrade via CLI</div>
              <div><span className="text-accent">$</span> <span className="text-foreground">30s workspace create "Acme Corp"</span></div>
              <div><span className="text-accent">$</span> <span className="text-foreground">30s billing subscribe</span></div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              *Unlimited subject to reasonable use and anti-abuse rate limits. Founding customers keep this price.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <iframe
            width="380"
            height="38"
            style={{ border: 0 }}
            src="https://climate.stripe.com/badge/Tin9IW?theme=dark&size=small&locale=en-US"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
