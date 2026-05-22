import SponsorsSection from "@/components/sections/SponsorsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import Ticker from "@/components/sections/Ticker";
import Manifesto from "@/components/sections/Manifesto";
import Hero from "@/components/sections/Hero";
import TeamsSection from "@/components/sections/TeamsSection";

export default function Home() {
  return (
    <main style={{ padding: "100px 40px" }}>
      <Hero />
      <Ticker />
      <StatsSection />
      <SponsorsSection />
      <Manifesto />
      <TeamsSection />
    </main>
  );
}
