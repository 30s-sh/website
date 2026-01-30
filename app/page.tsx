import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Footer } from "@/components/footer";
import { Pricing } from "@/components/pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <HowItWorks />
      <Pricing />
      <Footer />
    </main>
  );
}
