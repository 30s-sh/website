import { Hero } from "@/components/hero";
import { WhyItMatters } from "@/components/why-it-matters";
import { HowItWorks } from "@/components/how-it-works";
import { Footer } from "@/components/footer";
import { Pricing } from "@/components/pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <WhyItMatters />
      <HowItWorks />
      <Pricing />
      <Footer />
    </main>
  );
}
