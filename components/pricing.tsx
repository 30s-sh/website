
export function Pricing() {
  return (
    <section className="pt-6 pb-20 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Free Tier */}
          <div className="border border-zinc-800 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-2">Free</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold">$0</span>
              <span className="text-zinc-400"> / month</span>
            </div>
            <p className="text-zinc-400 mb-6">For individuals getting started.</p>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                50 sends per month
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                End-to-end encryption
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                TTL & one-time view options
              </li>
            </ul>
          </div>

          {/* Pro Tier */}
          <div className="border-2 border-green-500/50 rounded-lg p-8 bg-gradient-to-b from-green-950/20 to-zinc-900/50 relative ring-1 ring-green-500/20">
            <div className="absolute -top-3 left-8 bg-green-600 text-xs font-medium px-3 py-1 rounded-full">
              Founding Team
            </div>
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold">$50</span>
              <span className="text-zinc-400"> / month per domain</span>
            </div>
            <p className="text-zinc-400 mb-6">For teams that want shared access + guardrails.</p>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Domain unlock (DNS-verified) — everyone on @yourcompany.com can use it
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Unlimited sends within your domain*
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Team policies (enforce TTL / one-time view / defaults)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Team activity log (sent / revealed / expired)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Domain webhooks (created / revealed / expired events)
              </li>
            </ul>
            <div className="mt-6 border border-zinc-700 bg-zinc-950 rounded-md p-4 font-mono text-sm">
              <div className="text-xs text-zinc-500 mb-2 font-sans">Upgrade via CLI</div>
              <div><span className="text-green-400">$</span> <span className="text-white">30s workspace create "Acme Corp"</span></div>
              <div><span className="text-green-400">$</span> <span className="text-white">30s billing subscribe</span></div>
            </div>
            <p className="text-xs text-zinc-500 mt-4">
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
