import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Footer />
    </main>
  );
}
