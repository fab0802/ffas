import SponsorsSection from "@/components/sections/SponsorsSection";
import StatsSection from "@/components/sections/StatsSection";
import Ticker from "@/components/sections/Ticker";
import Manifesto from "@/components/sections/Manifesto";
import Hero from "@/components/sections/Hero";
import TeamsSection from "@/components/sections/TeamsSection";
import NextMatchSection from "@/components/sections/NextMatchSection";
import NewsSection from "@/components/sections/NewsSection";
import JoinCTA from "@/components/sections/JoinCTA";
import NextEventsSection from "@/components/sections/NextEventsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <StatsSection />
      <SponsorsSection />
      <Manifesto />
      <TeamsSection />
      <NextMatchSection />
      <NextEventsSection />
      <NewsSection />
      <JoinCTA />
    </main>
  );
}
