import { Navbar } from "../components/LandingPage/Navbar";
import { HeroSection } from "../components/LandingPage/HeroSection";
import { StatsSection } from "../components/LandingPage/StatsSection";
import { ChallengesSection } from "../components/LandingPage/ChallengesSection";
import { Footer } from "../components/LandingPage/Footer";

export function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#13121d] text-[#e4e0f0]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.06)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.22),transparent_45%),radial-gradient(circle_at_8%_30%,rgba(56,189,248,0.14),transparent_40%)]" />

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <StatsSection />
        <ChallengesSection />
        <Footer />
      </div>
    </div>
  );
}
