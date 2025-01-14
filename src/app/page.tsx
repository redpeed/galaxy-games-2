import Hero from "@/components/main-page/Hero";
import Games from "@/components/main-page/Games";
import Tokens from "@/components/main-page/Tokens";
import Roadmap from "@/components/main-page/Roadmap";
import Partners from "@/components/main-page/Partners";
import GalaxyGames from "@/components/main-page/GalaxyGames";

export default function Home() {
  return (
    <>
      <Hero />
      <Games />
      <Tokens />
      <Roadmap />
      <Partners />
      <GalaxyGames />
    </>
  );
}
