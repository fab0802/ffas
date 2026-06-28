import Reveal from "@/components/ui/Reveal";
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
    <>
      <Hero />
      <Reveal>
        <Ticker />
      </Reveal>
      <Reveal>
        <StatsSection />
      </Reveal>
      <Reveal>
        <SponsorsSection />
      </Reveal>
      <Reveal>
        <Manifesto />
      </Reveal>
      <Reveal>
        <TeamsSection />
      </Reveal>
      <Reveal>
        <NextMatchSection />
      </Reveal>
      <Reveal>
        <NextEventsSection />
      </Reveal>
      <Reveal>
        <NewsSection />
      </Reveal>
      <Reveal>
        <JoinCTA />
      </Reveal>
    </>
  );
}
