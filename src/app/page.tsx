import Hero from "@/components/sections/Hero";
import LogoCloud from "@/components/sections/LogoCloud";
import StatsStrip from "@/components/sections/StatsStrip";
import FeaturesBento from "@/components/sections/FeaturesBento";
import Integrations from "@/components/sections/Integrations";
import HomeFinalCta from "@/components/HomeFinalCta";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <LogoCloud />
      <StatsStrip />
      <FeaturesBento />
      <Integrations />
      <HomeFinalCta />
    </main>
  );
}
